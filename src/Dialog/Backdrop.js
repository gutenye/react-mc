// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Backdrop extends React.Component {
  static displayName = 'Dialog.Backdrop'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__backdrop', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Backdrop
