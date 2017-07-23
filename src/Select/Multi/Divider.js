// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Divider extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'option',
  }
  static displayName = 'Select.Multi.Divider'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-divider', className)
    return (
      <Component
        className={rootClassName}
        role="presentation"
        disabled
        {...rest}
      />
    )
  }
}

export default Divider
