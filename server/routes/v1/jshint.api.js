'use strict';

var express = require('express');
var router = express.Router();

var CONFIG = require('../../../config/npm.config');
var JSHINT_RULES = require('../../models/jshint.model');

var scanWith = CONFIG.jshint;
var extend = CONFIG.extend;
var scandir = CONFIG.scandir;

/**
 * Access URL: localhost:9000/api/v1/lint/js/errors
 */
router.post('/js/errors', function(req, res, next) {
	console.log("Payload: ", req.body);
	console.log("JSHINT_RULES: ", JSHINT_RULES);

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