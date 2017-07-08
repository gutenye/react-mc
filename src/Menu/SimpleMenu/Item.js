// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Item extends React.Component {
  props: {
    disabled?: boolean,
  } & PropsT

  render() {
    const { disabled, className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    let disabledProps = disabled
      ? {
          tabIndex: '-1',
          'aria-disabled': 'true',
        }
      : {}
    return (
      <div
        role="menuitem"
        tabIndex="0"
        {...disabledProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

export default Item
