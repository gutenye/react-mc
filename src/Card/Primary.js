import React, { Component } from 'react'
import cx from 'classnames'

export default class Primary extends Component {
  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-card__primary', className)
    return (
      <section className={className} {...rest}>
        {children}
      </section>
    )
  }
}
