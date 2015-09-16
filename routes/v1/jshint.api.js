'use strict';

var express = require('express');
var router = express.Router();

var jshint = require('../../config/npm.config').jshint;

/**
 * Access URL:
 * localhost:9000/api/v1/js/errors
 */
router.get('/js/errors', function(req, res, next) {
	res.json({
		"status": "done"
	});
});

module.exports = router;