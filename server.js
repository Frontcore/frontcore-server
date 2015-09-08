'use strict';

var http = require('http'),
	app = require('./app'),
	PRODUCT = require('./package.json');

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(app.get('port'));

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
			console.error('Requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error('Port is already in use');
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
	console.log('\n\n\t %s v%s is listening on server %s:%s', PRODUCT.name, PRODUCT.version, app.get('uri'), app.get('port'));
}