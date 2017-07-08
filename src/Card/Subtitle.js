import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Subtitle extends React.Component {
  props: PropsT

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__subtitle', className)
    return (
      <h1 className={rootClassName} {...rest}>
        {children}
      </h1>
    )
  }
}

export default Subtitle
