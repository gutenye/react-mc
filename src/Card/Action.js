import React from 'react'
import cx from 'classnames'
import Button from '../Button'
import type { PropsC } from '../types'

class Action extends React.Component {
  props: PropsC
  static defaultProps = {
    component: Button,
  }
  static displayName = 'Card.Action'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__action',
      'mdc-button--compact',
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Action
