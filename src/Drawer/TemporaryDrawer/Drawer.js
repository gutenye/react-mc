// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Drawer extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Drawer.Temporary.Drawer'

  render() {
    const { component: Component, className, children, ...rest } = this.props
    const rootClassName = cx('mdc-temporary-drawer__drawer', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Drawer
