// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Content extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div
        className={cx('mdc-persistent-drawer__content', className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
}

export default Content
