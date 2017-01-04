import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Item extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-list-item', className)
    return (
      <li className={classes} {...rest}>
        {children}
      </li>
    )
  }
}
