// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../../types'

class Divider extends React.Component {
  static displayName = 'Select.Multi.Divider'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-list-divider', className)
    return (
      <option
        className={rootClassName}
        role="presentation"
        disabled
        {...rest}
      />
    )
  }
}

export default Divider
