'use strict';

let _babelJest = require('babel-jest');

module.exports = {
  process: function(src, filename) {
    if (filename.match(/\.[css|less]/)) {
        return '';
    }
    return _babelJest.process(src, filename);
  }
};
