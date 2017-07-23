// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class GroupSubheader extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'h3',
  }
  static displayName = 'List.Group.Subheader'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-group__subheader', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default GroupSubheader
