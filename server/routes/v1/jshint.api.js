'use strict';

var express = require('express');
var router = express.Router();

var jshint = require('../../../config/npm.config').jshint;

/**
 * Access URL: localhost:9000/api/v1/lint/js/errors
 */
router.get('/js/errors', function(req, res, next) {
	res.json({
		"jshint": "errors",
		"status": "done"
	});
});

router.get('/js/options', function(req, res, next) {
	res.json({
		"jshint": "options",
		"status": "done"
	});
});

router.get('/js/functions', function(req, res, next) {
	res.json({
		"jshint": "functions",
		"status": "done"
	});
});

router.get('/js/implieds', function(req, res, next) {
	res.json({
		"jshint": "implieds",
		"status": "done"
	});
});

router.get('/js/globals', function(req, res, next) {
	res.json({
		"jshint": "globals",
		"status": "done"
	});
});

router.get('/js/unused', function(req, res, next) {
	res.json({
		"jshint": "unused",
		"status": "done"
	});
});

router.get('/js/member', function(req, res, next) {
	res.json({
		"jshint": "member",
		"status": "done"
	});
});

module.exports = router;