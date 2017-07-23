// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class LayoutGrid extends React.Component {
  props: {
    fixedColumnWidth?: boolean,
    align?: 'left' | 'right',
  } & PropsC

  static defaultProps = {
    component: 'div',
  }
  static Cell: any
  static Inner: any

  render() {
    const {
      component: Component,
      fixedColumnWidth,
      align,
      className,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-layout-grid',
      {
        'mdc-layout-grid--fixed-column-width': fixedColumnWidth,
        [`mdc-layout-grid--align-${align}`]: align,
      },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default LayoutGrid
