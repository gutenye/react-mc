// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class GridTile extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'li',
  }
  static displayName = 'GridList.Tile'
  static Primary: any
  static PrimaryContent: any
  static Secondary: any
  static SupportText: any
  static Title: any
  static Icon: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default GridTile
