import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class ToolbarSpacer extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-permanent-drawer__toolbar-spacer', className)
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }
}
