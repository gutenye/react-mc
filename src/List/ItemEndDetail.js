// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class EndDetail extends React.Component {
  static displayName = 'List.Item.EndDetail'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-item__end-detail',
      'aria-hidden',
      className
    )
    return (
      <a className={rootClassName} {...rest}>
        {children}
      </a>
    )
  }
}

export default EndDetail
