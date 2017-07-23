import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class SupportingText extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'section',
  }
  static displayName = 'Card.SupportingText'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__supporting-text', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default SupportingText
