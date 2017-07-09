// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Divider extends React.Component {
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-divider', className)
    return (
      <option class={rootClassName} role="presentation" disabled {...rest} />
    )
  }
}

export default Divider
