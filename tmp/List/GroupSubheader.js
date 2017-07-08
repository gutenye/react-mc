import React from 'react'
import cx from 'classnames'

export default class GroupSubheader extends React.Component {
  static propTypes = {}

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-group__subheader', className)
    return (
      <h3 className={rootClassName} {...rest}>
        {children}
      </h3>
    )
  }
}
