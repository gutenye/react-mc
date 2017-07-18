// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Secondary extends React.Component {
  static displayName = 'GridList.Tile.Secondary'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__secondary', className)
    return (
      <span className={rootClassName} {...rest}>
        {children}
      </span>
    )
  }
}

export default Secondary
