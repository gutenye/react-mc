// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class StartDetail extends React.Component {
  static displayName = 'List.Item.StartDetail'
  props: PropsC

  static defaultProps = {
    component: 'i',
  }

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-item__start-detail',
      'aria-hidden',
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default StartDetail
