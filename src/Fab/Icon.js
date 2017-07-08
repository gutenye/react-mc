// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Icon extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <span className={cx('mdc-fab__icon', className)} {...rest}>
        {children}
      </span>
    )
  }
}

export default Icon
