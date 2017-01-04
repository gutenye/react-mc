module.exports = {
  entry: `${__dirname}/App`,

  output: {
    path: `${__dirname}/build`,
    filename: 'app.js',
  },

  module: {
    loaders: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
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
