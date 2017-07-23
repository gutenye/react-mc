// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class SelectPureCss extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'select',
  }
  static displayName = 'Select.PureCss'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-select', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default SelectPureCss
