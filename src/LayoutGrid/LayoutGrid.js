// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class LayoutGrid extends React.Component {
  static Cell: any
  static Inner: any
  props: {
    fixedColumnWidth?: boolean,
    align?: 'left' | 'right',
  } & PropsT

  render() {
    const { fixedColumnWidth, align, className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-layout-grid',
      {
        'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
        [`mdc-layout-grid--align-${align}`]: align,
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
