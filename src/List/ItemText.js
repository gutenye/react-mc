// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class ItemText extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'List.Item.Text'
  static Secondary: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-item__text', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default ItemText
