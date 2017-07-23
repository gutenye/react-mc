// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class EndDetail extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'a',
  }
  static displayName = 'List.Item.EndDetail'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-item__end-detail',
      'aria-hidden',
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default EndDetail
