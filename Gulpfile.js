'use strict';

/**
 * Require 3rd party `npm`.
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	htmlhint = require('gulp-htmlhint'),
	jscs = require('gulp-jscs'),
	jshint = require('gulp-jshint'),
	jsonlint = require("gulp-jsonlint");

/**
 * Require built-in `npm`.
 */
var path = require('path');

/**
 * Require built-in `configure files`.
 */
var SERVE_RULES = require('./config/serve.rules'),
	SERVE_FILES = require('./config/serve.files');

/**
 * Setup htmlhint task.
 */
gulp.task('htmlhint', function() {
	return gulp.src('./client/*.html')
		.pipe(htmlhint(SERVE_RULES.lint.rules.html))
		.pipe(htmlhint.reporter())
		.on('error', gutil.log)
});

/**
 * Setup jsonlint task.
 */
gulp.task('jsonlint', function() {
	return gulp.src('./*.json')
		.pipe(jsonlint())
		.pipe(jsonlint.reporter());
});

/**
 * Define sub-tasks : Tasks for Less compilation for development.
 */
gulp.task('default', ['jsonlint', 'htmlhint']);