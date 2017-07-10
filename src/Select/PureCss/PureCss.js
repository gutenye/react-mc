// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class SelectPureCss extends React.Component {
  static displayName = 'Select.PureCss'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-select', className)
    return (
      <select className={rootClassName} {...rest}>
        {children}
      </select>
    )
  }
}

export default SelectPureCss
