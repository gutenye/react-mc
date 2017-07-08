// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Elevation extends React.Component {
  props: {
    z: number | string,
  } & PropsT

  render() {
    const { z, className, children, ...rest } = this.props
    return (
      <div className={cx(`mdc-elevation--z${z}`, className)} {...rest}>
        {children}
      </div>
    )
  }
}

export default Elevation
