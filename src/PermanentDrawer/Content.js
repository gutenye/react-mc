import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Content extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-permanent-drawer__content', className)
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }
}
