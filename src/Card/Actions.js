// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Actions extends React.Component {
  static displayName = 'Card.Actions'
  props: {
    vertical: boolean,
  } & PropsT

  render() {
    const { vertical, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__actions',
      {
        'mdc-card__actions--vertical': vertical,
      },
      className
    )
    return (
      <section className={rootClassName} {...rest}>
        {children}
      </section>
    )
  }
}

export default Actions
