(function() {
	'use strict';

	module.exports = {
		"path": {
			"html": {
				"gateway": {
					"src": ["./client/*.html"]
				},
				"templates": {
					"src": [
						"./client/app/**/*.html",
						"./client/components/**/*.html"
					]
				}
			},
			"json": {
				"src": ["./*.json"]
			},
			"js": {
				"src": [
					"Gulpfile.js",
					"./configs/*.js",
					"./client/views/**/*.js",
					"./client/components/**/*.js",
					"./client/router/**/*.js",
					"./client/models/**/*.js",
					"./client/collections/**/*.js",
					"./server/**/*.js"
				]
			},
			"less": {
				"src": ["./client/stylesheets/less/_consolidate.less"],
				"dest": "./client/stylesheets/css/"
			}
		}
	};
})()