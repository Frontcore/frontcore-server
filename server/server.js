/**
 * Requires a in-built utility functions;
 */
import http from 'http';

/**
 * Requires a constants utility functions;
 */
import PRODUCT from '../package.json';

/**
 * Requires a frontcore utility functions;
 * @requires app:./app.js
 */
import app from './app';

/**
 * Define utility objects;
 */
let appProp = {};
appProp.port = app.get('port');
appProp.address = app.get('uri');

/**
 * Create HTTP server.
 * @param {object} app - express app
 */
let server = http.createServer(app);

/**
 * Event listener for HTTP server 'error' event.
 */
let onError = function(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	/**
	 * Handle specific listen errors with friendly message.
	 */
	switch (error.code) {
		case 'EACCES':
			console.error('Requires elevated privileges.');
			break;

		case 'EADDRINUSE':
			console.error('Port is already in use.');
			break;

		default:
			throw error;
	}

	process.exit(1);
};

/**
 * Event listener for HTTP server 'listening' event.
 */
var onListening = function() {
	console.log('\n ' + PRODUCT.name + ' v' + PRODUCT.version);
	console.line();

	console.log(' Web server is started on ' + appProp.address + ':' + appProp.port + '\n');
};

/**
 * Listen on provided port, on all network interfaces.
 * @param {string} appProp.port - port on which express server is listening
 */
server.listen(appProp.port);
