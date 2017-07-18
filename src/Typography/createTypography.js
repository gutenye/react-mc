// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

export default function createTypography(name: string) {
  return class extends React.Component {
    props: {
      component?: string,
      adjustMargin?: boolean,
    } & PropsT

    static defaultProps = {
      component: 'div',
    }

    render() {
      const {
        component,
        adjustMargin,
        className,
        children,
        ...rest
      } = this.props
      const rootClassName = cx(
        `mdc-typography--${name}`,
        {
          'mdc-typography--adjust-margin': adjustMargin,
        },
        className
      )
      return React.createElement(
        component,
        {
          className: rootClassName,
          ...rest,
        },
        children
      )
    }
  }
}
