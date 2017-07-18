// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Drawer extends React.Component {
  static displayName = 'Drawer.Temporary.Drawer'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-temporary-drawer__drawer', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Drawer
