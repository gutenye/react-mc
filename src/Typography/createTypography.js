// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

export default function createTypography(name: string) {
  return class extends React.Component {
    props: {
      component?: string,
      adjustMargin?: boolean,
    } & PropsC

    static defaultProps = {
      component: 'div',
    }

    render() {
      const {
        component: Component,
        adjustMargin,
        className,
        ...rest
      } = this.props
      const rootClassName = cx(
        `mdc-typography--${name}`,
        {
          'mdc-typography--adjust-margin': adjustMargin,
        },
        className
      )
      return <Component className={rootClassName} {...rest} />
    }
  }
}
