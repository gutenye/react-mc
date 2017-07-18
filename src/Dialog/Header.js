// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Header extends React.Component {
  static displayName = 'Dialog.Header'
  static Title: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__header', className)
    return (
      <header className={rootClassName} {...rest}>
        {children}
      </header>
    )
  }
}

export default Header
