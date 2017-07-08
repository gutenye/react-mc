// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class EndDetail extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <a
        className={cx('mdc-list-item__end_detail', 'aria-hidden', className)}
        {...rest}
      >
        {children}
      </a>
    )
  }
}

export default EndDetail
