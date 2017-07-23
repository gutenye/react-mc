// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class HeaderTitle extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Dialog.Header.Title'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-dialog__header__title', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default HeaderTitle
