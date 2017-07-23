// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../../types'

class Group extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'optgroup',
  }
  static displayName = 'Select.Multi.Group'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-group', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Group
