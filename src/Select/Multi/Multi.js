// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Multi extends React.Component {
  static Group: any
  static Item: any
  static Divider: any
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-multi-select', 'mdc-list', className)
    return (
      <select multiple size="6" className={rootClassName} {...rest}>
        {children}
      </select>
    )
  }
}

export default Multi
