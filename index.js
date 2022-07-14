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

app.post("/checksession", function(req, res){
    if(req.session.user){
        res.json({status:"OK"})
    }else{
        res.redirect('/index.html')
    }
})

app.get("/dashboard", isAuthenticated, function(req, res){
        res.redirect('/main.html')
})
app.get("/dashboard", function(req, res){
    res.redirect('/index.html')
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
        let result = await client.query(`SELECT * FROM getuser('${req.body.email}', '${req.body.password}') AS T1;`)
        //pino.logger.info(result)
        if (result.rows[0].email == req.body.email) {
            await client.query(`CALL setuserlogin('${req.body.email}')`)

            req.session.regenerate(function (err) {
                if (err) next(err)

                // store user information in session, typically a user id
                req.session.user = result.rows[0].uid

                // save the session before redirection to ensure page
                // load does not happen before session is saved
                
                req.session.save(function (err) {
                    if (err) return next(err)
                    //res.redirect('main.html')
                })
                
                res.json({ status: 'OK - user authenticated and session saved' });
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
