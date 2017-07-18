// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Icon extends React.Component {
  static displayName = 'Fab.Icon'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-fab__icon', className)
    return (
      <span className={rootClassName} {...rest}>
        {children}
      </span>
    )
  }
}

export default Icon
