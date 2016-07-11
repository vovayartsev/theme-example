'use strict';

var path = require('path');
var webpack = require('webpack');

var webpackRoot = path.join(__dirname, 'src');

var config = {
  entry: 'index.js',

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    root: webpackRoot,
  },

  module: {
    loaders: [
      {
        loader: 'style!css',
        test: /\.css$/,
      }, {
        loader: "url-loader?mimetype=image/png",
        test: /\.png$/
      }, {
        loader: "url-loader?mimetype=image/svg",
        test: /\.svg$/
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  },
};

module.exports = config;
