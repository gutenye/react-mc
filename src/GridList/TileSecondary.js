// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Secondary extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'span',
  }
  static displayName = 'GridList.Tile.Secondary'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__secondary', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Secondary
