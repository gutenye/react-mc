// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class PrimaryContent extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'img',
  }
  static displayName = 'GridList.Tile.PrimaryContent'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__primary-content', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default PrimaryContent
