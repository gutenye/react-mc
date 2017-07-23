// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class PermanentDrawer extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'nav',
  }
  static displayName = 'Drawer.Permanent'
  static Content: any
  static ToolbarSpacer: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-permanent-drawer',
      'mdc-typography',
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default PermanentDrawer
