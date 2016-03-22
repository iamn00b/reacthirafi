var webpack = require('webpack');
var merge = require('webpack-merge');

var es6promise = require('es6-promise');
es6promise.polyfill();

var TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

var commonConfiguration = require('./webpack/common.config.js');
var devConfiguration = require('./webpack/dev.config.js');
var prodConfiguration = require('./webpack/prod.config.js');

// merge
if (TARGET === 'start' || !TARGET)
  module.exports = merge(commonConfiguration, devConfiguration);

if (TARGET === 'build')
  module.exports = merge(commonConfiguration, prodConfiguration);