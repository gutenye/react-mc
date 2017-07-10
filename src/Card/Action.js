import React from 'react'
import cx from 'classnames'
import Button from '../Button'
import type { PropsT } from '../types'

class Action extends React.Component {
  static displayName = 'Card.Action'
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__action',
      'mdc-button--compact',
      className
    )
    return (
      <Button className={rootClassName} {...rest}>
        {children}
      </Button>
    )
  }
}

export default Action
