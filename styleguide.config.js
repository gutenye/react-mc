const path = require('path')
const Copy = require('copy-webpack-plugin')
const Compression = require('compression-webpack-plugin')

module.exports = {
  title: 'react-mc docs',
  styleguideDir: 'build.docs',
  template: 'styleguide/template.html',
  require: ['material-components-web/material-components-web.scss'],
  //assetsDir: 'static',

  sections: [
    { name: 'Button', content: 'src/Button/README.md',  components: 'src/Button/[A-Z]*.js' },
    { name: 'Card', content: 'src/Card/README.md', components: 'src/Card/[A-Z]*.js' },
    { name: 'Checkbox', content: 'src/Checkbox/README.md', components: 'src/Checkbox/[A-Z]*.js' },
    { name: 'Dialog', content: 'src/Dialog/README.md', components: 'src/Dialog/[A-Z]*.js' },
    { name: 'Drawer', content: 'src/Drawer/README.md', components: 'src/Drawer/[A-Z]*.js' },
    { name: 'Elevation', content: 'src/Elevation/README.md', components: 'src/Elevation/[A-Z]*.js' },
    { name: 'Fab', content: 'src/Fab/README.md', components: 'src/Fab/[A-Z]*.js' },
    { name: 'FormField', content: 'src/FormField/README.md', components: 'src/FormField/[A-Z]*.js' },
    { name: 'GridList', content: 'src/GridList/README.md', components: 'src/GridList/[A-Z]*.js' },
    { name: 'IconToggle', content: 'src/IconToggle/README.md', components: 'src/IconToggle/[A-Z]*.js' },
    { name: 'LayoutGrid', content: 'src/LayoutGrid/README.md', components: 'src/LayoutGrid/[A-Z]*.js' },
    { name: 'LinearProgress', content: 'src/LinearProgress/README.md', components: 'src/LinearProgress/[A-Z]*.js' },
    { name: 'List', content: 'src/List/README.md', components: 'src/List/[A-Z]*.js' },
    { name: 'Menu', content: 'src/Menu/README.md', components: 'src/Menu/[A-Z]*.js' },
    { name: 'Radio', content: 'src/Radio/README.md', components: 'src/Radio/[A-Z]*.js' },
    { name: 'Select', content: 'src/Select/README.md', components: 'src/Select/[A-Z]*.js' },
    { name: 'Slider', content: 'src/Slider/README.md', components: 'src/Slider/[A-Z]*.js' },
    { name: 'Snackbar', content: 'src/Snackbar/README.md', components: 'src/Snackbar/[A-Z]*.js' },
    { name: 'Switch', content: 'src/Switch/README.md', components: 'src/Switch/[A-Z]*.js' },
    { name: 'Tabs', content: 'src/Tabs/README.md', components: 'src/Tabs/[A-Z]*.js' },
    { name: 'Textfield', content: 'src/Textfield/README.md', components: 'src/Textfield/[A-Z]*.js' },
    { name: 'Toolbar', content: 'src/Toolbar/README.md', components: 'src/Toolbar/[A-Z]*.js' },
    { name: 'Typography', content: 'src/Typography/README.md', components: 'src/Typography/[A-Z]*.js' },
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md')
  },

  webpackConfig: {
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
        {test: /\.js$/, include: /node_modules\/@material/, use: ['babel-loader']},
        {test: /\.scss$/, use: ['style-loader', 'css-loader', {loader: 'sass-loader', options: {
            includePaths: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')]
        }}]},
      ]
    },
    plugins: [
      new Compression()
      //new Copy([{from: 'static'}])
    ]
  }
}

