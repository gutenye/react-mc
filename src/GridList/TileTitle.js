// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Title extends React.Component {
  static displayName = 'GridList.Tile.Title'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__title', className)
    return (
      <span className={rootClassName} {...rest}>
        {children}
      </span>
    )
  }
}

export default Title
