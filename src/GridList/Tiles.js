// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Tiles extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <ul className={cx('mdc-grid-list__tiles', className)} {...rest}>
        {children}
      </ul>
    )
  }
}

export default Tiles
