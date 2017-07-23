// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Actions extends React.Component {
  props: {
    vertical: boolean,
  } & PropsC

  static defaultProps = {
    component: 'section',
  }
  static displayName = 'Card.Actions'

  render() {
    const { component: Component, vertical, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__actions',
      {
        'mdc-card__actions--vertical': vertical,
      },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Actions
