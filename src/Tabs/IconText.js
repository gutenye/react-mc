// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class IconText extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-tab__icon-text', className)
    return (
      <span className={rootClassName} {...rest}>
        {children}
      </span>
    )
  }
}

export default IconText
