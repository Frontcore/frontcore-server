import path from 'path';
import fs from 'fs';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import passport from 'passport';
import bunyan from 'bunyan';

/**
 * Requires a constants utility functions;
 */
import STACK_CONFIG from '../config/stack.conf';
import MONGO_CONFIG from '../config/mongo.conf';
import { MongoDB } from './utils/mongodb.utils';
import PRODUCT from '../package.json';

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
const app = express();

/**
 * Create a logger
 */
const log = bunyan.createLogger({
	name: PRODUCT.name,
	streams: [{
		level: 'info',
		stream: process.stdout // log INFO and above to stdout
	}, {
		level: 'error',
		path: path.join(__dirname, 'logs', 'error.log') // log ERROR and above to a file
	}]
});

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
        break;

    case STACK_CONFIG.server.prod.NODE_ENV.toLowerCase():
        /**
         * Application configurations for production environment.
         * NODE_ENV=production node server.js
         */
        app.set('port', process.env.PORT || STACK_CONFIG.server.prod.port);
        app.set('uri', STACK_CONFIG.server.prod.ip);
        break;
}

/**
 * Syntax:
 * app.use('/api/<version>/<root-route-name>', require('./routes/<version>/<api-file>'));
 */
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/auth', require('./routes/' + STACK_CONFIG.api.defaults.version + '/user/authenticate.api'));
app.use('/api/' + STACK_CONFIG.api.defaults.version + '/user', require('./routes/' + STACK_CONFIG.api.defaults.version + '/user/user.api'));
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
  res.status(500).json(!error ? {} : error);
});

module.exports = app;
