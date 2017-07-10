// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Primary extends React.Component {
  static displayName = 'GridList.Tile.Primary'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-grid-tile__primary', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default Primary
