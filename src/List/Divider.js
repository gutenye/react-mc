// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Divider extends React.Component {
  static displayName = 'List.Divider'
  props: {
    inset?: boolean,
  } & PropsT

  render() {
    const { inset, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-divider',
      {
        'mdc-list-divider--inset': inset,
      },
      className
    )
    return <li role="seperator" className={rootClassName} {...rest} />
  }
}

export default Divider
