#!/usr/bin/env node
'use strict'

const config = require("config");
const env = process.env.NODE_ENV || 'development'

const https = require('https')

const express = require('express')
var session = require('express-session')
let crypto;
try {
    crypto = require('crypto');
} catch (err) {
    pino.logger.error('crypto support is disabled!');
}
var path = require('path');
const hdbs = require("express-handlebars");
var fs = require('fs');
const { type } = require('express/lib/response');
var compression = require('compression')
var pino = require('express-pino-logger')()

const { Pool, Client } = require('pg')
const poolConfig = {
    user: config.get('postgresql.user'),
    host: config.get('postgresql.host'),
    database: config.get('postgresql.database'),
    password: config.get('postgresql.password'),
    port: config.get('postgresql.port')
}
const pool = new Pool(poolConfig);

const app = express()
const port = config.get('application.port')

app.use(session({
    secret: 'The quick brown fox jumps over the lazy dog.',
    resave: false,
    saveUninitialized: true
}))
app.use(compression())
app.use(pino)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.engine("handlebars", hdbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


var hbs = hdbs.create({ defaultLayout: 'svg' });

// middleware to test if authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) next()
    else next('route')
}

/*
 * Handle endpoints
 */

app.post("/checksession", function (req, res) {
    if (req.session.user) {
        res.json({ status: "OK", user_data: req.session.user })
    } else {
        res.redirect('/index.html')
    }
})

app.get("/dashboard", isAuthenticated, function (req, res) {
    res.redirect('/main.html')
})
app.get("/dashboard", function (req, res) {
    res.redirect('/index.html')
})

app.post("/transactions", isAuthenticated, async function (req, res, next) {
    pino.logger.info(req.body.payload)

    const client = await pool.connect()
    try {
        //pino.logger.info(req.body.password)
        let result = await client.query(`CALL settransactionvalue('${req.body.payload.date}', '${req.body.payload.product}', '${req.body.payload.value}', '${req.body.payload.currency}', '${req.body.payload.corporation}');`)
        //pino.logger.info(result)
        res.json({ status: 'OK - Transaction succesfuly registered' });

    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'Transaction value error' });
    } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
})

app.get("/transactions", isAuthenticated, async function (req, res, next) {
    const client = await pool.connect()
    try {
        //pino.logger.info(req.body.password)
        let result = await client.query(`select TO_CHAR(transaction_value.ts::date, 'yyyy-mm-dd') as register_date, prd.name as product_short_name, value, currency from transaction_value
        join (select product.uid, product.name from product
              join (select uid from corporation where corporation.name= '${req.session.user[0].corporation}') as corp on corporation_id = corp.uid 
             ) as prd on product_id = prd.uid
        ORDER BY transaction_value.ts DESC;`)
        //pino.logger.info(result)

        res.json({ status: 'OK - Results of histrical Transaction', result: result.rows });

    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'Transaction get history error' });
    } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
})
app.get("/transactions", function (req, res) {
    res.redirect('/index.html')
})

app.get("/md", isAuthenticated, async function (req, res, next) {
    const client = await pool.connect()
    try {
        let result = await client.query(`
        with
        prd as
        (select json_agg(json_build_object('name', name, 'shortname', shortname, 'book', book)) as p from md_product),
        bc as
        (select json_agg(json_build_object('component', component, 'service',service, 'shortname',shortname)) as b from md_business_component),
        e as
        (select json_agg(json_build_object('type', type, 'name', name, 'shortname', shortname)) as erc from md_ercsa )
    select json_build_object('business_component',b, 'ercsa', erc, 'product', p) as result from bc, e, prd;`)
        res.json({ status: 'OK - Results for MD', result: result.rows[0].result })
    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'MD get error' });
    } finally {
        client.release()
    }
})
app.get("/md", function (req, res) {
    res.redirect('/index.html')
})

app.post("/questionnaire", isAuthenticated, async function (req, res, next) {
    //pino.logger.info(req.body.payload);
    //pino.logger.info(req.body.extra);

    const client = await pool.connect()
    try {
        //make it an upsert
        if (typeof req.body.extra.uid === 'undefined') {
            let result = await client.query(`INSERT INTO ercsa_response(application_user_id, response, status, ts) 
            VALUES(
                (SELECT uid FROM application_user WHERE email = '${req.session.user[0].username}'), 
                '${JSON.stringify(req.body.payload)}', '${req.body.payload.status}', 
                NOW());`)
            //pino.logger.info(result)
            res.json({ status: 'OK - Questionnaire response succesfuly registered' });
        }else{
            let result = await client.query(`UPDATE ercsa_response SET
            response = '${JSON.stringify(req.body.payload)}', 
            status = '${req.body.payload.status}', 
            ts = NOW() 
                WHERE application_user_id =(SELECT uid FROM application_user WHERE email = '${req.session.user[0].username}') AND
                uid =${req.body.extra.uid};`)
            //pino.logger.info(result)
            res.json({ status: 'OK - Questionnaire response succesfuly updated' });
        }
    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'Questionnaire response error' });
    } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
})

app.get("/questionnaire", isAuthenticated, async function (req, res, next) {
    const client = await pool.connect()
    try {
        let bc = [];
        req.session.user.forEach(element => {
            bc.push(element.business_component);
        });
        bc = JSON.stringify(bc).replaceAll("[", "").replaceAll("]", "").replaceAll("\"", "'");

        let result = await client.query(`
        select uid, application_user_id, response, status from ercsa_response
        where application_user_id = (select uid from application_user where email = '${req.session.user[0].username}') AND 
        response->>'business_component' in (${bc})
        order by  response->>'y' desc, response->>'q' desc, response->>'business_component'
        `)
        //pino.logger.info(result);
        res.json({ status: 'OK - Results for MD', result: result.rows })
    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'MD get error' });
    } finally {
        client.release()
    }
})

app.get("/questionnaire", function (req, res) {
    res.redirect("/index.html")
})


app.post('/logout', function (req, res, next) {
    // logout logic

    // clear the user from the session object and save.
    // this will ensure that re-using the old session id
    // does not have a logged in user
    req.session.user = null
    req.session.save(function (err) {
        if (err) next(err)
        // regenerate the session, which is good practice to help
        // guard against forms of session fixation

        req.session.regenerate(function (err) {
            if (err) next(err)
            res.redirect('/')
        })

    })
})

app.post('/login', async function (req, res, next) {
    //We expect a JSON in body

    const client = await pool.connect()
    try {
        //pino.logger.info(req.body.password)
        let result = await client.query(`SELECT * FROM getuser('${req.body.email}', '${req.body.password}') AS result;`)
        //pino.logger.info(result)
        if (result.rows[0].result && result.rows[0].result[0].username == req.body.email) {
            await client.query(`CALL setuserlogin('${req.body.email}')`)

            req.session.regenerate(function (err) {
                if (err) next(err)

                // store user information in session, typically a user id
                req.session.user = result.rows[0].result

                // save the session before redirection to ensure page
                // load does not happen before session is saved

                req.session.save(function (err) {
                    if (err) return next(err)
                    //res.redirect('main.html')
                })

                res.json({ status: 'OK - user authenticated and session saved', user_data: req.session.user });
            })


            //open a server session
        } else {
            res.json({ status: 'User authentication error!' });
        }

    } catch (err) {
        pino.logger.error(err);
        res.json({ status: 'error' });
    } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }

});

/*
 * Error pages
 * 404, 50x
 */
app.use(function (req, res, next) {
    res.status(404);

    res.render('404', {
        layout: 'error'
    });
});

app.use(function (err, req, res, next) {
    // we may use properties of the error object
    // here and next(err) appropriately, or if
    // we possibly recovered from the error, simply next().
    res.status(err.status || 500);
    res.render('50x', {
        layout: 'error'
    });
});

process.on('SIGTERM', () => {
    pino.logger.info('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        pino.logger.fatal('HTTP server closed')
    })
})


// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', async (err, client) => {
    pino.logger.error('Unexpected error on idle client', err)
    pino.logger.info('PostgreSQL Pool end')
    await pool.end()
    pino.logger.info('Pool has drained')
    process.exit(-1)
})

const server = app.listen(config.get('application.port'));
pino.logger.info(`Express started on port ${config.get('application.port')} in ENV::${env}`);

// async/await - check out a client
; (async () => {
    const client = await pool.connect()
    try {
        const res = await client.query('SELECT NOW()')
        pino.logger.info(`PostgreSQL server time: ${res.rows[0].now}`)
    } finally {
        // Make sure to release the client before any error handling,
        // just in case the error handling itself throws an error.
        client.release()
    }
})().catch(err => pino.logger.error(err.stack))
