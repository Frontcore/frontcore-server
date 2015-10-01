(function() {
	"use strict";

	module.exports = {
		"lint": {
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
					"./config/*.js",
					"./client/views/**/*.js",
					"./client/components/**/*.js",
					"./client/router/**/*.js",
					"./client/models/**/*.js",
					"./client/collections/**/*.js",
					"./server/**/*.js"
				]
			},
			"css": {
				"src": [
					"./client/stylesheets/css/*.css"
				]
			}
		},
		"compile": {
			"less": {
				"src": "./client/stylesheets/less/_consolidate.less",
				"dest": "./client/stylesheets/css/"
			}
		},
		"build": {
			"browserify": {
				"src": "./client/main.js",
				"dest": "./client-prod/"
			},
			"minify": {
				"html": {
					"src": "./client/index.html",
					"dest": "./client-prod/"
				},
				"css": {
					"src": "./client/stylesheets/css/_consolidate.css",
					"dest": "./client-prod/stylesheets/css/"
				},
				"templates": {
					"src": "./client/templates/**/*.html",
					"dest": "./client-prod/templates/"
				}
			}
		}
	};
})();