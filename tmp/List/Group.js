import React from 'react'
import cx from 'classnames'

export default class Group extends React.Component {
  static propTypes = {}

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-group', className)
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}
