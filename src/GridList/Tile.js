// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class GridTile extends React.Component {
  static displayName = 'GridList.Tile'
  static Primary: any
  static PrimaryContent: any
  static Secondary: any
  static SupportText: any
  static Title: any
  static Icon: any

  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile', className)
    return (
      <li className={rootClassName} {...rest}>
        {children}
      </li>
    )
  }
}

export default GridTile
