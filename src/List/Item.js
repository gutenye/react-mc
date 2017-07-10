// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Item extends React.Component {
  static displayName = 'List.Item'
  static EndDetail: any
  static StartDetail: any
  static Text: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    return (
      <li className={rootClassName} {...rest}>
        {children}
      </li>
    )
  }
}

export default Item
