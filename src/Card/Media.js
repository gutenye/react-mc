import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Media extends React.Component {
  static displayName = 'Card.Media'
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__media', className)
    return (
      <section className={rootClassName} {...rest}>
        {children}
      </section>
    )
  }
}

export default Media
