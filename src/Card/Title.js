// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Title extends React.Component {
  props: {
    large: boolean,
  } & PropsT

  render() {
    const { large, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__title',
      { 'md-card__title--large': large },
      className
    )
    return (
      <h1 className={rootClassName} {...rest}>
        {children}
      </h1>
    )
  }
}

export default Title
