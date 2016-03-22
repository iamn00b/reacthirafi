var PATHS = require('./app.path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
      path: PATHS.build,
      filename: 'bundle.js'
  },

  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: PATHS.app
      }
    ],
    loaders: [
        {
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: PATHS.app
        },
        {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            include: PATHS.app
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'ReacThirafi',
      appMountId: 'app',
      inject: false
    })
  ]
};