(function() {
	'use strict';

	/**
	 * Requires a in-built utility functions;
	 */
	var http = require('http');

	/**
	 * Requires a constants utility functions;
	 */
	var PRODUCT = require('../package.json');

	/**
	 * Requires a frontcore utility functions;
	 * @requires app:./app.js
	 * @requires msg:./utils/message.js
	 */
	var app = require('./app'),
		msg = require('./utils/message');

	/**
	 * Define utility objects;
	 */
	var appProp = {};
	appProp.port = app.get('port');
	appProp.address = app.get('uri');

	/**
	 * Create HTTP server.
	 * @param {object} app - express app
	 */
	var server = http.createServer(app);

	/**
	 * Listen on provided port, on all network interfaces.
	 * @param {object} _port - port on which express server is listening
	 */
	server.listen(appProp.port);

	/**
	 * Subscribe events
	 */
	server.on('error', onError);
	server.on('listening', onListening);

	/**
	 * Event listener for HTTP server 'error' event.
	 */
	function onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}

		/**
		 * Handle specific listen errors with friendly message.
		 */
		switch (error.code) {
			case 'EACCES':
				msg.error('Requires elevated privileges');
				process.exit(1);
				break;

			case 'EADDRINUSE':
				msg.error('Port is already in use');
				process.exit(1);
				break;

			default:
				throw error;
		}
	}

	/**
	 * Event listener for HTTP server 'listening' event.
	 */
	function onListening() {
		msg.log('\n ' + PRODUCT.name + ' v' + PRODUCT.version);
		msg.line();

		msg.log(' Web server is started on ' + appProp.address + ':' + appProp.port + '\n');
	}

})();