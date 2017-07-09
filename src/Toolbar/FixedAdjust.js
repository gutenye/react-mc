// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class FixedAdjust extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar-fixed-adjust', className)
    return (
      <main className={rootClassName} {...rest}>
        {children}
      </main>
    )
  }
}

export default FixedAdjust
