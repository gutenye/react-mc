import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Media extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'section',
  }
  static displayName = 'Card.Media'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__media', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Media
