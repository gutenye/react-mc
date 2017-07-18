// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Tiles extends React.Component {
  static displayName = 'GridList.Tiles'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-grid-list__tiles', className)
    return (
      <ul className={rootClassName} {...rest}>
        {children}
      </ul>
    )
  }
}

export default Tiles
