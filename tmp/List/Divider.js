import React from 'react'
import cx from 'classnames'

export default class Divider extends React.Component {
  static propTypes = {
    inset: PropTypes.bool,
  }

  render() {
    const { inset, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-list-divider',
      {
        'mdc-list-divider--inset': inset,
      },
      className
    )
    return (
      <li role="seperator" className={rootClassName} {...rest}>
        {children}
      </li>
    )
  }
}
