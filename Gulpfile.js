(function() {
	'use strict';

	/**
	 * Require 3rd party `npm`.
	 */
	var gulp = require('gulp'),
		gutil = require('gulp-util'),
		htmlhint = require('gulp-htmlhint'),
		jscs = require('gulp-jscs'),
		jshint = require('gulp-jshint'),
		jsonlint = require("gulp-jsonlint"),
		less = require('gulp-less');

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
			.on('error', gutil.log);
	});

	/**
	 * Setup jsonlint task.
	 */
	gulp.task('jsonlint', function() {
		return gulp.src('./*.json')
			.pipe(jsonlint())
			.pipe(jsonlint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jshint task.
	 */
	gulp.task('jshint', function() {
		return gulp.src(['Gulpfile.js', './client/**/*.js', './server/**/*.js'])
			.pipe(jshint(SERVE_RULES.lint.rules.js))
			.pipe(jshint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jscs task.
	 */
	gulp.task('jscs', function() {
		return gulp.src(['Gulpfile.js', './client/**/*.js', './server/**/*.js'])
			.pipe(jscs(SERVE_RULES.lint.rules.jscs));
	});

	/**
	 * Setup less compilation task.
	 */
	gulp.task('less', function() {
		return gulp.src('./client/stylesheets/less/_consolidate.less')
			.pipe(less())
			.on('error', gutil.log)
			.pipe(gulp.dest('./client/stylesheets/css/'));
	});

	/**
	 * Define sub-tasks : Tasks for Less compilation for development.
	 */
	gulp.task('default', ['htmlhint', 'jsonlint', 'jshint', 'jscs', 'less']);
})();