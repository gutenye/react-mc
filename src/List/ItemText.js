// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class ItemText extends React.Component {
  static displayName = 'List.Item.Text'
  static Secondary: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-item__text', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default ItemText
