/**
 * Requires a in-built utility functions;
 */
import path from 'path';
import fs from 'fs';

/**
 * Requires a 3rd party utility functions;
 */
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import winston from 'winston';
import helmet from 'helmet';
import passport from 'passport';

/**
 * Requires a constants utility functions;
 */
import STACK_CONFIG from '../config/stack.conf';
import MONGO_CONFIG from '../config/mongo.conf';
import { ErrorHandler } from './utils/error.utils';
import { MongoDB } from './utils/mongodb.utils';

/**
 * Create an instance of MongoDB class.
 */
let mongo = new MongoDB({
  baseUrl: MONGO_CONFIG.connect.url,
  dbPort: MONGO_CONFIG.connect.port,
  dbName: MONGO_CONFIG.connect.database
});
mongo = mongo.connect();

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
 * Setup the logger
 */
app.use(morgan('combined', {
    stream: accessLogStream
}));

/**
 * For parsing application/json
 */
app.use(bodyParser.json());

/**
 * For parsing application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**
 * Protect app from some well-known web vulnerabilities
 * by setting HTTP headers appropriately.
 */
app.use(helmet());

/**
 * Gzip compressing can greatly decrease the size of the response body
 * and hence increase the speed of a web app.
 */
app.use(compression());

app.use(session({
  secret: 'frontcore-server',
  resave: false,
  saveUninitialized: false
}));

/**
 * Initialize passport & passport session
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Passport will serialize and deserialize user instances to and from the session.
 */
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

/**
 * Setup NODE_ENV
 */
let NODE_ENV = process.env.NODE_ENV || STACK_CONFIG.server.dev.NODE_ENV;
switch (NODE_ENV.toLowerCase()) {
    case STACK_CONFIG.server.dev.NODE_ENV.toLowerCase():
        /**
         * Application configurations for development environment.
         * NODE_ENV=development node server.js
         */
        app.set('port', process.env.PORT || STACK_CONFIG.server.dev.port);
        app.set('uri', STACK_CONFIG.server.dev.ip);
        app.use(express.static(path.join(__dirname, STACK_CONFIG.client.dist)));
        break;

    case STACK_CONFIG.server.prod.NODE_ENV.toLowerCase():
        /**
         * Application configurations for production environment.
         * NODE_ENV=production node server.js
         */
        app.set('port', process.env.PORT || STACK_CONFIG.server.prod.port);
        app.set('uri', STACK_CONFIG.server.prod.ip);
        app.use(express.static(path.join(__dirname, STACK_CONFIG.client.dist)));
        break;
}

/**
 * Syntax:
 * app.use('/api/<version>/<root-route-name>', require('./routes/<version>/<api-file>'));
 */
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/auth', require('./routes/' + STACK_CONFIG.api.defaults.version + '/user/authenticate.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/user', require('./routes/' + STACK_CONFIG.api.defaults.version + '/user/user.api'));

app.all('*', (req, res, next) => {
  passport.authenticate('verify-token', (error, user, info) => {
    console.log('error: ', error);
    console.log('user: ', user);
    console.log('info: ', info);

    if (error) {
      return next(error);
    }

    if (user) {
      console.log('IF:');
      req.user = user;
      return next();
    } else {
      console.log('ELSE:');
      return res.status(401).json({ status: 'error', code: 'unauthorized' });
    }
  })(req, res, next);
});

app.use('/api/' + STACK_CONFIG.api.defaults.version + '/upload', require('./routes/' + STACK_CONFIG.api.defaults.version + '/upload/upload.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/project', require('./routes/' + STACK_CONFIG.api.defaults.version + '/project/project.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/projects', require('./routes/' + STACK_CONFIG.api.defaults.version + '/projects/projects.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/browse', require('./routes/' + STACK_CONFIG.api.defaults.version + '/browse/browse.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/browse', require('./routes/' + STACK_CONFIG.api.defaults.version + '/browse/content.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/lint', require('./routes/' + STACK_CONFIG.api.defaults.version + '/lints/eslint.api'));

/**
 * Router error handling with ErrorHander class
 */
app.use((error, req, res, next) => {
  let eHandlerRes = new ErrorHandler(error);
  eHandlerRes = eHandlerRes.getErrorMessage();
  console.log('eHandlerRes: ', eHandlerRes);

  res.status(500).json(!eHandlerRes ? {} : eHandlerRes);
});

module.exports = app;
