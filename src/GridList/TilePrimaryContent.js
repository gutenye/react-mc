// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class PrimaryContent extends React.Component {
  static displayName = 'GridList.Tile.PrimaryContent'
  props: PropsT

  render() {
    const { className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__primary-content', className)
    return (
      <img
        className={rootClassName}
        {...rest}
      />
    )
  }
}

export default PrimaryContent
