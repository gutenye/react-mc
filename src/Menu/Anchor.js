// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Anchor extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <div className={cx('mdc-menu-anchor', className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default Anchor