import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Group extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-list-group', className)
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }
}
