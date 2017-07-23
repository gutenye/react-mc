// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Elevation extends React.Component {
  props: {
    z: number | string,
  } & PropsC

  static defaultProps = {
    component: 'div',
  }

  render() {
    const { component: Component, z, className, ...rest } = this.props
    const rootClassName = cx(`mdc-elevation--z${z}`, className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Elevation
