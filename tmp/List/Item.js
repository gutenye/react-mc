import React from 'react'
import cx from 'classnames'

export default class Item extends React.Component {
  static propTypes = {}

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    return (
      <li className={rootClassName} {...rest}>
        {children}
      </li>
    )
  }
}
