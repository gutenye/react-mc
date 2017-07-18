// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class HeaderContent extends React.Component {
  static displayName = 'Drawer.Temporary.HeaderContent'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-temporary-drawer__header-content', className)
    return (
      <div
        className={rootClassName}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

export default HeaderContent
