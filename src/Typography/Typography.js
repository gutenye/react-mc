// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Typography extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-typography', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Typography
