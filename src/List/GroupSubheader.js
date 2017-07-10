// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class GroupSubheader extends React.Component {
  static displayName = 'List.Group.Subheader'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-group__subheader', className)
    return (
      <h3 className={rootClassName} {...rest}>
        {children}
      </h3>
    )
  }
}

export default GroupSubheader
