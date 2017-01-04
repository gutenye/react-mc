import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class GroupSubheader extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-list-group__subheader', className)
    return (
      <h3 className={classes} {...rest}>
        {children}
      </h3>
    )
  }
}
