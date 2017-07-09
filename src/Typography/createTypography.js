// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

export default function createTypography(name: string) {
  return class extends React.Component {
    props: {
      adjustMargin?: boolean,
    } & PropsT

    render() {
      const { adjustMargin, className, children, ...rest } = this.props
      const rootClassName = cx(
        `mdc-typography--${name}`,
        {
          'mdc-typography--adjust-margin': adjustMargin,
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
}
