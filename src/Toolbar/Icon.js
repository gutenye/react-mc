// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Icon extends React.Component {
  props: {
    menu?: boolean,
  } & PropsT

  render() {
    const { menu, className, children, ...rest } = this.props
    const rootClassName = cx(
      menu ? 'mdc-toolbar__icon--menu' : 'mdc-toolbar__icon',
      className
    )
    return (
      <i className={rootClassName} {...rest}>
        {children}
      </i>
    )
  }
}

export default Icon
