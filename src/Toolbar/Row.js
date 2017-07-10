// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Row extends React.Component {
  static displayName = 'Toolbar.Row'
  props: PropsT

  render() {
    const { className, children, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar__row', className)
    return (
      <section className={rootClassName} {...rest}>
        {children}
      </section>
    )
  }
}

export default Row
