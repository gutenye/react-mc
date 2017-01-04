import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Actions extends Component {
  static propTypes = {
    vertical: PropTypes.bool
  }

  render() {
    const {vertical, children, className, ...rest} = this.props
    const classes = cx('mdc-card__actions', {
      'mdc-card__actions--vertical': vertical
    }, className)
    return (
      <section className={classes} {...rest}>
        {children}
      </section>
    )
  }
}
