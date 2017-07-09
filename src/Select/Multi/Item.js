// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Item extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    return (
      <option className={rootClassName} {...rest}>
        {children}
      </option>
    )
  }
}

export default Item
