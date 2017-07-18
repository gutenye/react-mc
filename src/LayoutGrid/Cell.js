// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Cell extends React.Component {
  static displayName = 'LayoutGrid.Cell'
  props: {
    /** 1-12 */
    span?: number,
    /** 1-12 desktop span, add `mdc-layout-grid__cell--span-${desktop}-desktop` class */
    desktop?: number,
    /** 1-8 */
    tablet?: number,
    /** 1-4 */
    phone?: number,
    /** 1-12 */
    order?: number,
    /** top middle bottom */
    align?: string,
  } & PropsT

  render() {
    const {
      span,
      desktop,
      tablet,
      phone,
      order,
      align,
      className,
      children,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-layout-grid__cell',
      {
        [`mdc-layout-grid__cell--span-${span}`]: span,
        [`mdc-layout-grid__cell--span-${desktop}-desktop`]: desktop,
        [`mdc-layout-grid__cell--span-${tablet}-tablet`]: tablet,
        [`mdc-layout-grid__cell--span-${phone}-phone`]: phone,
        [`mdc-layout-grid__cell--order-${order}`]: order,
        [`mdc-layout-grid__cell--align-${align}`]: align,
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

export default Cell
