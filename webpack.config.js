const merge = require('webpack-merge');

const es6promise = require('es6-promise');
es6promise.polyfill();

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const commonConfiguration = require('./webpack/common.config.js');
const devConfiguration = require('./webpack/dev.config.js');
const prodConfiguration = require('./webpack/prod.config.js');

// merge
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(commonConfiguration, devConfiguration);
}

if (TARGET === 'build') {
  module.exports = merge(commonConfiguration, prodConfiguration);
}
