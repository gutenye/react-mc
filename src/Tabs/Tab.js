// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Tab extends React.Component {
  static displayName = 'Tabs.Tab'
  props: {
    active?: boolean,
    withIconAndText?: boolean,
  } & PropsT

  render() {
    const { active, withIconAndText, className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-tab',
      {
        'mdc-tab--active': active,
        'mdc-tab--with-icon-and-text': withIconAndText,
      },
      className
    )
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}

export default Tab
