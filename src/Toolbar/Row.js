// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Row extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'section',
  }
  static displayName = 'Toolbar.Row'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar__row', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Row
