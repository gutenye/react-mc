// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class SupportText extends React.Component {
  static displayName = 'GridList.Tile.SupportText'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__support-text', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default SupportText
