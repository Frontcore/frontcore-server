(function() {
	'use strict';

	var dir = require('node-dir');

	exports.directory = function(payload, options) {

		dir.readFiles(payload.jsdir, {
			match: /.js$/
		}, function(err, content, next) {
			if (err) {
				throw err;
			}
			next();
		}, function(err, files) {
			if (err) throw err;

			scanWith.JSHINT(files, assign({}, JSHINT_RULES.options.jshint.enforcing, JSHINT_RULES.options.jshint.relaxing), JSHINT_RULES.options.jshint.environments);

			res.json({
				"files": files,
				"length": files.length,
				"jshint": {
					"errors": scanWith.JSHINT.data().errors
				}
			});
		});
	};

})();