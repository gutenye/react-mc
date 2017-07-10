// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class SupportText extends React.Component {
  static displayName = 'GridList.Tile.SupportText'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-grid-tile__support-text', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default SupportText
