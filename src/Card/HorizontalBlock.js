// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class HorizontalBlock extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Card.HorizontalBlock'
  static Title: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__horizontal-block', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default HorizontalBlock
