// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Header extends React.Component {
  props: PropsT
  static Title: any

  render() {
    const { className, children, ...rest } = this.props
    return (
      <header className={cx('mdc-dialog__header', className)} {...rest}>
        {children}
      </header>
    )
  }
}

export default Header
