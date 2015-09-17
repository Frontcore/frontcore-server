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
		return gulp.src(SERVE_FILES.path.html.gateway.src)
			.pipe(htmlhint(SERVE_RULES.lint.rules.html.gateway))
			.pipe(htmlhint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jsonlint task.
	 */
	gulp.task('jsonlint', function() {
		return gulp.src(SERVE_FILES.path.json.src)
			.pipe(jsonlint())
			.pipe(jsonlint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jshint task.
	 */
	gulp.task('jshint', function() {
		return gulp.src(SERVE_FILES.path.js.src)
			.pipe(jshint(SERVE_RULES.lint.rules.js))
			.pipe(jshint.reporter())
			.on('error', gutil.log);
	});

	/**
	 * Setup jscs task.
	 */
	gulp.task('jscs', function() {
		return gulp.src(SERVE_FILES.path.js.src)
			.pipe(jscs(SERVE_RULES.lint.rules.jscs));
	});

	/**
	 * Setup less compilation task.
	 */
	gulp.task('less', function() {
		return gulp.src(SERVE_FILES.path.less.src)
			.pipe(less())
			.on('error', gutil.log)
			.pipe(gulp.dest(SERVE_FILES.path.less.dest));
	});

	/**
	 * Define `default` tasks
	 */
	gulp.task('default', ['htmlhint', 'jsonlint', 'jshint', 'jscs', 'less']);

	/**
	 * Define `lintjs` tasks
	 */
	gulp.task('lintjs', ['jsonlint', 'jshint', 'jscs']);

})();