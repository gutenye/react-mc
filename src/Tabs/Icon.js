// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Icon extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-tab__icon', className)
    return (
      <i className={rootClassName} {...rest}>
        {children}
      </i>
    )
  }
}

export default Icon
