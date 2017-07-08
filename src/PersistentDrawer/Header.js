// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Header extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-persistent-drawer__header', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default Header
