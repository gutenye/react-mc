const path = require('path')
const Copy = require('copy-webpack-plugin')

module.exports = {
  title: 'react-mc docs',
  styleguideDir: 'build.docs',
  //assetsDir: 'static',

  sections: [
    { name: 'Button', content: 'src/Button/README.md',  components: 'src/Button/[A-Z]*.js' },
    { name: 'Card', content: 'src/Card/README.md', components: 'src/Card/[A-Z]*.js' },
    { name: 'Checkbox', content: 'src/Checkbox/README.md', components: 'src/Checkbox/[A-Z]*.js' },
    { name: 'Dialog', content: 'src/Dialog/README.md', components: 'src/Dialog/[A-Z]*.js' },
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md')
  },

  require: ['material-components-web/material-components-web.scss', './styleguide/global.js'],

  webpackConfig: {
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
        {test: /\.scss$/, use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {
            includePaths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
        }}]},
      ]
    },
    plugins: [
      //new Copy([{from: 'static'}])
    ]
  }
}

