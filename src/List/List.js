// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class List extends React.Component {
  props: {
    theme?: 'dark',
    dense?: boolean,
    twoLine?: boolean,
    avatarList?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'ul',
  }
  static Divider: any
  static Group: any
  static Item: any

  render() {
    const {
      component: Component,
      theme,
      dense,
      twoLine,
      avatarList,
      className,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-list',
      {
        [`mdc-list--theme-${theme}`]: theme,
        'mdc-list--dense': dense,
        'mdc-list--two-line': twoLine,
        'mdc-list--avatar-list': avatarList,
      },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default List
