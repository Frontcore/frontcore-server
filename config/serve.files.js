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
						"./client/templates/**/*.html"
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
					"./client/app/**/*.js",
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
			},
			"copy": {
				"assets": {
					"src": "./client/assets/**/*",
					"dest": "./client-prod/"
				},
				"bower": {
					"src": "./client/bower_components/**/*",
					"dest": "./client-prod/bower_components/"
				}
			}
		}
	};
})();