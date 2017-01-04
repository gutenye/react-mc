import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Title extends Component {
  static propTypes = {
    large: PropTypes.bool
  }

  render() {
    const {large, children, className, ...rest} = this.props
    const classes = cx('mdc-card__title', {'md-card__title--large': large}, className)
    return (
      <h1 className={classes} {...rest}>
        {children}
      </h1>
    )
  }
}
