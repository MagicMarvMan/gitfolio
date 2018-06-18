const webpack = require('webpack');
const path = require('path');
/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: []
  },
  plugins: {
    minimize: true
  }
};
