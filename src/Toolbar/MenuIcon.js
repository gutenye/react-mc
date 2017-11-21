// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class MenuIcon extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'i',
  }
  static displayName = 'Toolbar.MenuIcon'

  render() {
    const { component: Component, menu, className, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar__menu-icon', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default MenuIcon
