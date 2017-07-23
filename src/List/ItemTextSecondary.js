// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class ItemTextSecondary extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'List.Item.Text.Secondary'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-item__text__secondary', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default ItemTextSecondary
