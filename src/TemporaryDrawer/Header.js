import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class Header extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-temporary-drawer__header' className)
    return (
      <header className={classes} {...rest}>
        <div className='mdc-temporary-drawer__header-content'>
          {children}
        </div>
      </header>
    )
  }
}
