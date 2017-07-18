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
    const rootClassName = cx('mdc-dialog__horizontal-block', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default HorizontalBlock
