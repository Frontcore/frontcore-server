'use strict';

/**
 * Require 3rd party `npm`.
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	htmlhint = require('gulp-htmlhint');

/**
 * Require built-in `npm` + `configure files`.
 */
var path = require('path'),
	SERVE = require('./config/serve.rules');



/**
 * Setup Less compilation task.
 */
gulp.task('htmlhint', function() {
	return gulp.src('./client/*.html')
		.pipe(htmlhint(SERVE.lint.rules.html))
		.pipe(htmlhint.reporter())
		.on('error', gutil.log)
});

/**
 * Define sub-tasks : Tasks for Less compilation for development.
 */
gulp.task('default', ['htmlhint']);