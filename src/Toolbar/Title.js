// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Title extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'span',
  }
  static displayName = 'Toolbar.Title'

  render() {
    const { component: Component, className, ...rest } = this.props
    const rootClassName = cx('mdc-toolbar__title', className)
    return <Component className={rootClassName} {...rest} />
  }
}

export default Title
