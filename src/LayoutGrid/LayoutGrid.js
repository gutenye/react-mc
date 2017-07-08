// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class LayoutGrid extends React.Component {
  static Cell: any
  static Inner: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-layout-grid', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default LayoutGrid
