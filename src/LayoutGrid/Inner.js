// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Inner extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'LayoutGrid.Inner'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-layout-grid__inner', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Inner
