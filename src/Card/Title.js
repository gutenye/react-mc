// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Title extends React.Component {
  props: {
    large: boolean,
  } & PropsC

  static defaultProps = {
    component: 'h1',
  }
  static displayName = 'Card.Title'

  render() {
    const { component: Component, large, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__title',
      { 'md-card__title--large': large },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Title
