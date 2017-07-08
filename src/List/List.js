// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class List extends React.Component {
  static Divider: any
  static Group: any
  static Item: any
  props: {
    theme?: 'dark',
    dense?: boolean,
    twoLine?: boolean,
    avatarList?: boolean,
  } & PropsT

  render() {
    const {
      theme,
      dense,
      twoLine,
      avatarList,
      className,
      children,
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
    return (
      <ul className={rootClassName} {...rest}>
        {children}
      </ul>
    )
  }
}

export default List
