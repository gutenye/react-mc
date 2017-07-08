// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class GridTile extends React.Component {
  static Primary: any
  static PrimaryContent: any
  static Secondary: any
  static SupportText: any
  static Title: any

  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <li className={cx('mdc-grid-tile', className)} {...rest}>
        {children}
      </li>
    )
  }
}

export default GridTile
