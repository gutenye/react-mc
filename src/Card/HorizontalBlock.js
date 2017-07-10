// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class HorizontalBlock extends React.Component {
  static displayName = 'Card.HorizontalBlock'
  static Title: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-dialog__horizontal-block', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default HorizontalBlock
