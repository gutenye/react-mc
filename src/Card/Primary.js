// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Primary extends React.Component {
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__primary', className)
    return (
      <section className={rootClassName} {...rest}>
        {children}
      </section>
    )
  }
}

export default Primary
