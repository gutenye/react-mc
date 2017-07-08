// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Inner extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-layout-grid__inner', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default Inner
