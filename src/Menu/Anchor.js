// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Anchor extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Menu.Anchor'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-menu-anchor', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Anchor
