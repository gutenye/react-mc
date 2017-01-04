import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Divider extends Component {
  static propTypes = {
    inset: PropTypes.bool,
  }

  render() {
    const {inset, children, className, ...rest} = this.props
    const classes = cx('mdc-list-divider', {
      'mdc-list-divider--inset': inset
    }, className)
    return (
      <li role='seperator' className={classes} {...rest}>
        {children}
      </li>
    )
  }
}
