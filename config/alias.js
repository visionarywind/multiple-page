'use strict';

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      'src': resolve('src'),
      'common': resolve('src/common'),
      'components': resolve('src/components'),
      'static': resolve('static')
    }
  },
}