'use strict';

/**
 * Requires a 3rd party utility functions;
 */
var express = require('express');
var router = express.Router();

/**
 * Require static services data
 */
var JSHINT_RULES = require('../../services/jshint.service');

router.get('/js/rules', function(req, res, next) {
	console.log('1');
	res.status(200).json({
		"status": true,
		"rules": JSHINT_RULES
	});
});

module.exports = router;