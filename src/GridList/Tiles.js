// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Tiles extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'ul',
  }
  static displayName = 'GridList.Tiles'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-list__tiles', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Tiles
