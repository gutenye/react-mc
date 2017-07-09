// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Group extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-group', className)
    return (
      <optgroup className={rootClassName} {...rest}>
        {children}
      </optgroup>
    )
  }
}

export default Group
