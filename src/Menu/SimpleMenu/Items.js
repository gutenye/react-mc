// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Items extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-simple-menu__items', 'mdc-list', className)
    return (
      <ul role="menu" aria-hidden="true" className={rootClassName} {...rest}>
        {children}
      </ul>
    )
  }
}

export default Items
