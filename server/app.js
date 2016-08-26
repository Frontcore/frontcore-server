'use strict';

/**
 * Requires a in-built utility functions;
 */
import path from 'path';
import fs from 'fs';

/**
 * Requires a 3rd party utility functions;
 */
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import winston from 'winston';
import helmet from 'helmet';

/**
 * Requires a constants utility functions;
 */
import STACK_CONFIG from '../config/stack.conf';
import MONGO_CONFIG from '../config/mongo.conf';
import { ErrorHandler } from './utils/error.utils';
import { MongoDB } from './utils/mongodb.utils';

/**
 * Create an express app;
 */
let app = express();

/**
 * Create a write stream (in append mode)
 */
let accessLogStream = fs.createWriteStream(__dirname + '/' + STACK_CONFIG.logger.dirname + '/' + STACK_CONFIG.logger.filename, {
    flags: 'a'
});

/**
 * Create an instance of MongoDB class.
 */
let mongoClient = new MongoDB({
  baseUrl: MONGO_CONFIG.connect.url,
  dbPort: MONGO_CONFIG.connect.port,
  dbName: MONGO_CONFIG.connect.database
});
mongoClient = mongoClient.connect();

/**
 * Setup the logger
 */
app.use(morgan('combined', {
    stream: accessLogStream
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(helmet());
app.use(compression());

app.set('MongoClient', mongoClient);

let NODE_ENV = process.env.NODE_ENV || STACK_CONFIG.server.dev.NODE_ENV;
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
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/upload', require('./routes/' + STACK_CONFIG.api.defaults.version + '/upload/upload.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/projects', require('./routes/' + STACK_CONFIG.api.defaults.version + '/projects/projects.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/browse', require('./routes/' + STACK_CONFIG.api.defaults.version + '/browse/browse.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/browse', require('./routes/' + STACK_CONFIG.api.defaults.version + '/browse/content.api'));


app.use((error, req, res, next) => {
  let eHandlerRes = new ErrorHandler(error);
  eHandlerRes = eHandlerRes.getErrorMessage();

  res.status(eHandlerRes.status).json(eHandlerRes.response);
});

module.exports = app;
