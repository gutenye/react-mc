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
    { name: 'Getting Started', content: 'styleguide/README.md' },
    { name: 'Buttons', sections: [
      { name: 'Buttons', content: 'src/Button/README.md',  components: 'src/Button/[A-Z]*.js' },
      { name: 'Floating Action Buttons', content: 'src/Fab/README.md', components: 'src/Fab/[A-Z]*.js' },
      { name: 'Icon Toggle Buttons', content: 'src/IconToggle/README.md', components: 'src/IconToggle/[A-Z]*.js' },
    ]},
    { name: 'Cards', content: 'src/Card/README.md', components: 'src/Card/[A-Z]*.js' },
    { name: 'Dialogs', content: 'src/Dialog/README.md', components: 'src/Dialog/[A-Z]*.js' },
    { name: 'Drawers', content: 'src/Drawer/README.md', components: 'src/Drawer/[A-Z]*.js' },
    { name: 'Elevation', content: 'src/Elevation/README.md', components: 'src/Elevation/[A-Z]*.js' },
    { name: 'Grid Lists', content: 'src/GridList/README.md', components: 'src/GridList/[A-Z]*.js' },
    { name: 'Inputs and Controls', sections: [
      { name: 'Checkboxes', content: 'src/Checkbox/README.md', components: 'src/Checkbox/[A-Z]*.js' },
      { name: 'Form Fields', content: 'src/FormField/README.md', components: 'src/FormField/[A-Z]*.js' },
      { name: 'Radio Buttons', content: 'src/Radio/README.md', components: 'src/Radio/[A-Z]*.js' },
      { name: 'Select Menus', content: 'src/Select/README.md', components: 'src/Select/[A-Z]*.js' },
      { name: 'Sliders', content: 'src/Slider/README.md', components: 'src/Slider/[A-Z]*.js' },
      { name: 'Switches', content: 'src/Switch/README.md', components: 'src/Switch/[A-Z]*.js' },
      { name: 'Text Fields', content: 'src/Textfield/README.md', components: 'src/Textfield/[A-Z]*.js' },
    ]},
    { name: 'Layout Grids', content: 'src/LayoutGrid/README.md', components: 'src/LayoutGrid/[A-Z]*.js' },
    { name: 'Linear Progress', content: 'src/LinearProgress/README.md', components: 'src/LinearProgress/[A-Z]*.js' },
    { name: 'Lists', content: 'src/List/README.md', components: 'src/List/[A-Z]*.js' },
    { name: 'Menus', content: 'src/Menu/README.md', components: 'src/Menu/[A-Z]*.js' },
    { name: 'Snackbars', content: 'src/Snackbar/README.md', components: 'src/Snackbar/[A-Z]*.js' },
    { name: 'Tabs', content: 'src/Tabs/README.md', components: 'src/Tabs/[A-Z]*.js' },
    { name: 'Toolbars', content: 'src/Toolbar/README.md', components: 'src/Toolbar/[A-Z]*.js' },
    { name: 'Typography', content: 'src/Typography/README.md', components: 'src/Typography/[A-Z]*.js' },
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js$/, '.md')
  },

  styles: {
    ComponentsList: {
      isChild: {
        display: 'none'
      }
    }
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

