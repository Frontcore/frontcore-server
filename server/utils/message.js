(function() {
	'use strict';

	var chalk = require('chalk');

	exports.info = function(msg, msgPrefix, msgSuffix) {
		console.info(chalk.cyan(((msgPrefix) ? msgPrefix : '\n Info: ') + msg + ((msgSuffix) ? msgSuffix : '\n')));
	};

	exports.log = function(msg) {
		console.log(msg);
	};

	exports.error = function(msg, msgPrefix, msgSuffix) {
		console.error(chalk.red(((msgPrefix) ? msgPrefix : '\n Error: ') + msg + ((msgSuffix) ? msgSuffix : ' !\n')));
	};

	var _concat = function(char, len, callback) {
		var out = ' ',
			i = 0;

		while (i < len) {
			out += char;
			i++;
		}

		if (callback) {
			callback(out);
		}
	};

	exports.line = function(char, len) {
		char = (char) ? char : '-';
		len = (len) ? len : 50;

		var self = this;

		_concat(char, len, function(out) {
			self.log(out);
		});
	};

})();