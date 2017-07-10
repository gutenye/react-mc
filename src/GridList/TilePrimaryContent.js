// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class PrimaryContent extends React.Component {
  static displayName = 'GridList.Tile.PrimaryContent'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <img
        className={cx('mdc-grid-tile__primary-content', className)}
        {...rest}
      >
        {children}
      </img>
    )
  }
}

export default PrimaryContent
