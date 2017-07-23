// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Multi extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'select',
  }
  static displayName = 'Select.Multi'
  static Group: any
  static Item: any
  static Divider: any

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-multi-select', 'mdc-list', className)
    return <Component multiple size="6" className={rootClassName} {...rest} />
  }
}

export default Multi
