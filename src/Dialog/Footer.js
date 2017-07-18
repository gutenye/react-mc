// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Footer extends React.Component {
  static displayName = 'Dialog.Footer'
  static Button: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__footer', className)
    return (
      <footer className={rootClassName} {...rest}>
        {children}
      </footer>
    )
  }
}

export default Footer
