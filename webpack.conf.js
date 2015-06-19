'use strict';

var path = require('path');

module.exports = {
  target: 'node',
  entry: path.join(__dirname, 'test/parker-loader.test.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'parker-loader.test.js'
  }
}
