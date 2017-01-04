import '@material/drawer/dist/mdc.drawer.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class TemporaryDrawer extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-temporary-drawer', 'mdc-typography', className)
    return (
      <aside className={classes} {...rest}>
        <nav className='mdc-temporary-drawer__drawer'>
          {children}
        </nav>
      </aside>
    )
  }
}
