// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class ItemTextSecondary extends React.Component {
  static displayName = 'List.Item.Text.Secondary'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-item__text__secondary', className)
    return (
      <div
        className={rootClassName}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

export default ItemTextSecondary
