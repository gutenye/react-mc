// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Title extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    return (
      <span className={cx('mdc-grid-tile__title', className)} {...rest}>
        {children}
      </span>
    )
  }
}

export default Title
