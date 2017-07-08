import React from 'react'
import cx from 'classnames'

class Option extends React.Component {
  static propTypes = {}

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-list-item', className)
    return (
      <li role="option" tabIndex="0" className={rootClassName} {...rest}>
        {children}
      </li>
    )
  }
}

export default Option
