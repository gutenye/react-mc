// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Group extends React.Component {
  static Subheader: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-group', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Group
