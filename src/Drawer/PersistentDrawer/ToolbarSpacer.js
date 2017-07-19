// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class ToolbarSpacer extends React.Component {
  static displayName = 'Drawer.Persistent.ToolbarSpacer'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-persistent-drawer__toolbar-spacer', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default ToolbarSpacer
