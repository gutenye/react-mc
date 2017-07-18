// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class LayoutGrid extends React.Component {
  static Cell: any
  static Inner: any
  props: {
    fixedColumnWidth?: boolean,
  } & PropsT

  render() {
    const { fixedColumnWidth, className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-layout-grid',
      {
        'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
      },
      className
    )
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default LayoutGrid
