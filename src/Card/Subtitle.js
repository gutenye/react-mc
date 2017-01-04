import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Subtitle extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-card__subtitle', className)
    return (
      <h1 className={classes} {...rest}>
        {children}
      </h1>
    )
  }
}
