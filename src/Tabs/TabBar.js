// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class TabBar extends React.Component {
  static displayName = 'Tabs'
  static Icon: any
  static IconText: any
  static Indicator: any
  static Tab: any

  props: {
    iconsWithText?: boolean,
    iconTabBar?: boolean,
    theme?: 'dark',
  } & PropsT

  render() {
    const {
      iconsWithText,
      iconTabBar,
      theme,
      className,
      children,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-tab-bar',
      {
        'mdc-tab-bar--icons-with-text': iconsWithText,
        'mdc-tab-bar--icon-tab-bar': iconTabBar,
        [`mdc-tab-bar--theme-${theme}`]: theme,
      },
      className
    )
    return (
      <nav className={rootClassName} {...rest}>
        {children}
      </nav>
    )
  }
}

export default TabBar
