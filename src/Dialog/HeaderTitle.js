// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class HeaderTitle extends React.Component {
  static displayName = 'Dialog.Header.Title'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__header__title', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default HeaderTitle