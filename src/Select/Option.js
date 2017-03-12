import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class Option extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-list-item', className)
    return (
      <li role='option' tabIndex='0' className={classes} {...rest}>
        {children}
      </li>
    )
  }
}

export default Option
