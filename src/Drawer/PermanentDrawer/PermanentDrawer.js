// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class PermanentDrawer extends React.Component {
  static displayName = 'Drawer.Permanent'
  static Content: any
  static ToolbarSpacer: any
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-permanent-drawer',
      'mdc-typography',
      className
    )
    return (
      <nav className={rootClassName} {...rest}>
        {children}
      </nav>
    )
  }
}

export default PermanentDrawer
