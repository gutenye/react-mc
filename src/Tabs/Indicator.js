// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Indicator extends React.Component {
  static displayName = 'Tabs.Indicator'
  props: PropsT

  render() {
    const { className, ...rest } = this.props
    const rootClassName = cx('mdc-tab-bar__indicator', className)
    return <span className={rootClassName} {...rest} />
  }
}

export default Indicator
