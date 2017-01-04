import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class SupportingText extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-card__supporting-text', className)
    return (
      <section className={classes} {...rest}>
        {children}
      </section>
    )
  }
}
