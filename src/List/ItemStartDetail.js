// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class StartDetail extends React.Component {
  static displayName = 'List.Item.StartDetail'
  props: {
    component?: any,
  } & PropsT

  static defaultProps = {
    component: 'i',
  }

  render() {
    const { component, className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-item__start-detail',
      'aria-hidden',
      className
    )
    return React.createElement(
      component,
      { className: rootClassName, ...rest },
      children
    )
  }
}

export default StartDetail
