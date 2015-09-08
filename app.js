'use strict';

var express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser'),
  path = require('path'),
  fs = require('fs'),
  compression = require('compression');

var CONFIG = require("./config/server.env");

var app = express(),
  router = express.Router();

/**
 * Create a write stream (in append mode)
 */
var accessLogStream = fs.createWriteStream(__dirname + '/' + CONFIG.logger.dirname + '/' + CONFIG.logger.filename, {
  flags: 'a'
});

/**
 * Setup the logger
 */
app.use(morgan('combined', {
  stream: accessLogStream
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(compression());
app.set('trust proxy', function(ip) {
  return (ip === '127.0.0.1') ? true : false;
});

var NODE_ENV = process.env.NODE_ENV || CONFIG.server.dev.NODE_ENV;
switch (NODE_ENV.toLowerCase()) {
  case CONFIG.server.dev.NODE_ENV.toLowerCase():
    /**
     * Application configurations for development environment.
     * NODE_ENV=development node server.js
     */
    app.set('port', process.env.PORT || CONFIG.server.dev.port);
    app.set('uri', CONFIG.server.dev.ip);
    app.use(express.static(path.join(__dirname, CONFIG.server.dev.codebase)));
    break;

  case CONFIG.server.prod.NODE_ENV.toLowerCase():
    /**
     * Application configurations for production environment.
     * NODE_ENV=production node server.js
     */
    app.set('port', process.env.PORT || CONFIG.server.prod.port);
    app.set('uri', CONFIG.server.prod.ip);
    app.use(express.static(path.join(__dirname, CONFIG.server.prod.codebase)));
    break;
}

/**
 * Syntax:
 * app.use('/api/<version>/', require('./routes/<version>/<api-file>'));
 */

/**
 * JSHint API REST Service
 */
app.use('/api/' + CONFIG.api.defaults.version + '/lint', require('./routes/' + CONFIG.api.defaults.version + '/jshint.api'));

module.exports = app;