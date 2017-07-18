// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Header extends React.Component {
  static displayName = 'Drawer.Temporary.Header'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-temporary-drawer__header', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Header
