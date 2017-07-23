// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class TileIcon extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'i',
  }

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__icon', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default TileIcon
