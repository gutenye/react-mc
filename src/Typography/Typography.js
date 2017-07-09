// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Typography extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-typography', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Typography
