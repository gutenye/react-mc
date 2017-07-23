// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Footer extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'footer',
  }
  static displayName = 'Dialog.Footer'
  static Button: any

  render() {
    const { component: Component, className, children, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__footer', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Footer
