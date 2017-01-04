import '@material/drawer/dist/mdc.drawer.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Content from './Content'
import ToolbarSpacer from './ToolbarSpacer'

class PermanentDrawer extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-permanent-drawer', 'mdc-typography', className)
    return (
      <nav className={classes} {...rest}>
        {children}
      </nav>
    )
  }
}

PermanentDrawer.Content = Content
PermanentDrawer.ToolbarSpacer = ToolbarSpacer

export default PermanentDrawer
