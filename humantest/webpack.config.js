const path = require('path')

module.exports = {
  entry: `${__dirname}/App`,

  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },

  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.scss$/, use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {includePaths: [path.resolve(__dirname, "../node_modules")]}}] },
      { test: /\.js$/, use: [{loader: 'babel-loader'}], exclude: /node_modules/ },
    ]
  },

  devServer: {
    port: 3003,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  devtool: 'cheap-module-source-map',
}
