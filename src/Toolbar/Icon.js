// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Icon extends React.Component {
  props: {
    menu?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'i',
  }
  static displayName = 'Toolbar.Icon'

  render() {
    const { component: Component, menu, className, ...rest } = this.props
    const rootClassName = cx(
      menu ? 'mdc-toolbar__icon--menu' : 'mdc-toolbar__icon',
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Icon
