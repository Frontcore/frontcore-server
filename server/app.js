(function() {
    'use strict';

    /**
     * Requires a in-built utility functions;
     */
    var path = require('path'),
        fs = require('fs');

    /**
     * Requires a 3rd party utility functions;
     */
    var express = require('express'),
        morgan = require('morgan'),
        bodyParser = require('body-parser'),
        compression = require('compression');

    /**
     * Requires a constants utility functions;
     */
    var STACK_CONFIG = require("../config/stack.conf");

    /**
     * Create an express app;
     */
    var app = express();

    /**
     * Create a write stream (in append mode)
     */
    var accessLogStream = fs.createWriteStream(__dirname + '/' + STACK_CONFIG.logger.dirname + '/' + STACK_CONFIG.logger.filename, {
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

    var NODE_ENV = process.env.NODE_ENV || STACK_CONFIG.server.dev.NODE_ENV;
    switch (NODE_ENV.toLowerCase()) {
        case STACK_CONFIG.server.dev.NODE_ENV.toLowerCase():
            /**
             * Application configurations for development environment.
             * NODE_ENV=development node server.js
             */
            app.set('port', process.env.PORT || STACK_CONFIG.server.dev.port);
            app.set('uri', STACK_CONFIG.server.dev.ip);
            app.use(express.static(path.join(__dirname, STACK_CONFIG.server.dev.codebase)));
            break;

        case STACK_CONFIG.server.prod.NODE_ENV.toLowerCase():
            /**
             * Application configurations for production environment.
             * NODE_ENV=production node server.js
             */
            app.set('port', process.env.PORT || STACK_CONFIG.server.prod.port);
            app.set('uri', STACK_CONFIG.server.prod.ip);
            app.use(express.static(path.join(__dirname, STACK_CONFIG.server.prod.codebase)));
            break;
    }

    /**
     * Syntax:
     * app.use('/api/<version>/', require('./routes/<version>/<api-file>'));
     */
    app.use('/api/' + STACK_CONFIG.api.defaults.version + '/lint', require('./routes/' + STACK_CONFIG.api.defaults.version + '/jshint.api'));

    // require('./models/jshint.model');

    module.exports = app;

})();