#!/usr/bin/env node
'use strict'

const config = require("config");
const env = process.env.NODE_ENV || 'development'

const https = require('https')

const express = require('express')
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

app.use(compression())
app.use(pino)

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));

app.engine("handlebars", hdbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));


var hbs = hdbs.create({ defaultLayout: 'svg' });

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
;(async () => {
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
