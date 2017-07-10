// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Body extends React.Component {
  static displayName = 'Dialog.Body'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__body', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Body
