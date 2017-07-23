// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Primary extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'GridList.Tile.Primary'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__primary', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Primary
