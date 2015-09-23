(function() {
	'use strict';

	/**
	 * Requires a 3rd party utility functions;
	 */
	var express = require('express'),
		scanWith = require('jshint'),
		assign = require('object.assign');

	/**
	 * Create a new router
	 */
	var router = express.Router();

	/**
	 * Require static services data
	 */
	var JSHINT_RULES = require('../../services/jshint.service');

	/**
	 * Require utilities
	 */
	var scan = require('../../utils/fsscan');

	router.post('/js/errors', function(req, res) {

		// var files = scan.directory(payload, {
		// 	match: /.js$/
		// });

		// console.log(files);

		// scanWith.JSHINT(files, assign({}, JSHINT_RULES.options.jshint.enforcing, JSHINT_RULES.options.jshint.relaxing), JSHINT_RULES.options.jshint.environments);

		// res.json({
		// 	"files": files,
		// 	"length": files.length,
		// 	"jshint": {
		// 		"errors": scanWith.JSHINT.data().errors
		// 	}
		// });

		// var payload = req.body;


		// dir.readFiles(payload.jsdir, {
		// 	match: /.js$/
		// }, function(err, content, next) {
		// 	if (err) {
		// 		throw err;
		// 	}
		// 	next();
		// }, function(err, files) {
		// 	if (err) throw err;

		// 	scanWith.JSHINT(files, assign({}, JSHINT_RULES.options.jshint.enforcing, JSHINT_RULES.options.jshint.relaxing), JSHINT_RULES.options.jshint.environments);

		// 	res.json({
		// 		"files": files,
		// 		"length": files.length,
		// 		"jshint": {
		// 			"errors": scanWith.JSHINT.data().errors
		// 		}
		// 	});
		// });

	});

	module.exports = router;
})();