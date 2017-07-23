// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Primary extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'section',
  }
  static displayName = 'Card.Primary'

  render() {
    const { component: Component, children, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__primary', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Primary
