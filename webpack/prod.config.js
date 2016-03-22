var PATHS = require('./app.path');
var pkg = require('../package.json');

module.exports = {
  entry: {
    vendor: Object.keys(pkg.dependencies).filter(function(v) {
      // Exclude alt-utils as it won't work with this setup
      // due to the way the package has been designed
      // (no package.json main).
      return true; // v !== 'alt-utils';
    })
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};