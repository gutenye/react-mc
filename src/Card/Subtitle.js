import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Subtitle extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'h1',
  }
  static displayName = 'Card.Subtitle'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-card__subtitle', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Subtitle
