// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Content extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-permanent-drawer__content', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Content
