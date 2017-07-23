// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Header extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'header',
  }
  static displayName = 'Dialog.Header'
  static Title: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__header', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Header
