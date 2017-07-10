import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class SupportingText extends React.Component {
  static displayName = 'Card.SupportingText'
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__supporting-text', className)
    return (
      <section className={rootClassName} {...rest}>
        {children}
      </section>
    )
  }
}

export default SupportingText
