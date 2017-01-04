import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Button from '../Button'

export default class Action extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-card__action', 'mdc-button--compact', className)
    return (
      <Button className={classes} {...rest}>
        {children}
      </Button>
    )
  }
}
