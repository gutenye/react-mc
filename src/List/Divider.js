// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Divider extends React.Component {
  static displayName = 'List.Divider'
  props: {
    inset?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'li',
  }

  render() {
    const { component: Component, inset, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-divider',
      {
        'mdc-list-divider--inset': inset,
      },
      className
    )
    return <Component role="seperator" className={rootClassName} {...rest} />
  }
}

export default Divider
