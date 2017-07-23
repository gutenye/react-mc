// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Card extends React.Component {
  props: {
    horizontalBlock?: boolean,
    theme?: 'dark',
  } & PropsC

  static defaultProps = {
    component: 'div',
  }

  render() {
    const {
      component: Component,
      horizontalBlock,
      theme,
      className,
      ...rest
    } = this.props
    const rootClassName = cx(
      horizontalBlock ? 'mdc-card__horizontal-block' : 'mdc-card',
      {
        [`mdc-card--theme-${theme}`]: theme,
      },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Card
