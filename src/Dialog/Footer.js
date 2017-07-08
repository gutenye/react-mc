// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Footer extends React.Component {
  props: PropsT
  static Button: any

  render() {
    const { className, children, ...rest } = this.props
    return (
      <footer className={cx('mdc-dialog__footer', className)} {...rest}>
        {children}
      </footer>
    )
  }
}

export default Footer
