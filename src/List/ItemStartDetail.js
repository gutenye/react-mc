// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class StartDetail extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <i
        className={cx('mdc-list-item__start_detail', 'aria-hidden', className)}
        {...rest}
      >
        {children}
      </i>
    )
  }
}

export default StartDetail
