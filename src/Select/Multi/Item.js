// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Item extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'option',
  }
  static displayName = 'Select.Multi.Item'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Item
