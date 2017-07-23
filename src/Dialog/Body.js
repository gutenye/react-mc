// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Body extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Dialog.Body'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__body', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Body
