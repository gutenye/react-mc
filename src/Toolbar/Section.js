// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Section extends React.Component {
  props: {
    align: 'start' | 'end',
    shrinkToFit?: boolean,
  } & PropsT

  render() {
    const { align, shrinkToFit, className, children, ...rest } = this.props
    const rootClassName = cx(
      'mdc-toolbar__section',
      {
        [`mdc-toolbar__section--align-${align}`]: align,
        'mdc-toolbar__section--shrink-to-fit': shrinkToFit,
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

export default Section
