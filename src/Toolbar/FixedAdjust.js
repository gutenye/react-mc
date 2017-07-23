// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class FixedAdjust extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'main',
  }
  static displayName = 'Toolbar.FixedAdjust'
  root_: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar-fixed-adjust', className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        className={rootClassName}
        {...rest}
      />
    )
  }
}

export default FixedAdjust
