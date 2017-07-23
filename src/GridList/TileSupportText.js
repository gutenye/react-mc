// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class SupportText extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'GridList.Tile.SupportText'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-grid-tile__support-text', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default SupportText
