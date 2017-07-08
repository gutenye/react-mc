// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Card extends React.Component {
  props: {
    horizontalBlock?: boolean,
    theme?: 'dark',
  } & PropsT

  render() {
    const { horizontalBlock, theme, children, className, ...rest } = this.props
    const rootClassName = cx(
      horizontalBlock ? 'mdc-card__horizontal-block' : 'mdc-card',
      {
        [`mdc-card--theme-${theme}`]: theme,
      },
      className
    )
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Card
