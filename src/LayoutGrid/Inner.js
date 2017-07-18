// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Inner extends React.Component {
  static displayName = 'LayoutGrid.Inner'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-layout-grid__inner', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Inner
