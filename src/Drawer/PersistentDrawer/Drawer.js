// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Drawer extends React.Component {
  static displayName = 'Drawer.Persistent.Drawer'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-persistent-drawer__drawer', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Drawer
