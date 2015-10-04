(function() {
	'use strict';

	/**
	 * Requires a constants utility functions;
	 */
	var MONGO_CONFIG = require("../../config/mongo.conf");

	var MongoClient = require('mongodb').MongoClient;

	console.log(MONGO_CONFIG.connect.protocol + "://" + MONGO_CONFIG.connect.url + ":" + MONGO_CONFIG.connect.port + "/" + MONGO_CONFIG.connect.database);

	var connectString = MONGO_CONFIG.connect.protocol + "://" + MONGO_CONFIG.connect.url + ":" + MONGO_CONFIG.connect.port + "/" + MONGO_CONFIG.connect.database;

	MongoClient.connect(connectString, function(error, db) {
		if (error) {
			throw error;
		}

		var collection = db.collection('frontcoredb.jshint.rules.options.enforcing');

		collection.find().toArray(function(err, result) {
			if (err) {
				console.log(err);
			} else if (result.length) {
				console.log('Found:', result);
			} else {
				console.log('No document(s) found with defined "find" criteria!');
			}
			//Close connection
			db.close();
		});

	});

	module.exports = MongoClient;
})();