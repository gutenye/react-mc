import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Content extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-temporary-drawer__content', className)
    return (
      <nav className={classes} {...rest}>
        {children}
      </nav>
    )
  }
}
