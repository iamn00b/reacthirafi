var PATHS = require('./app.path');

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
      title: 'Kanban app',
      appMountId: 'app',
      inject: false
    })
  ]
};