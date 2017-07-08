import '@material/fab/dist/mdc.fab.css'
import React from 'react'
import cx from 'classnames'

export default class FAB extends React.Component {
  static propTypes = {
    mini: PropTypes.bool,
    plain: PropTypes.bool,
  }

  render() {
    const { mini, plain, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-fab',
      {
        'mdc-fab--mini': mini,
        'mdc-fab--plain': plain,
      },
      className
    )
    return (
      <button className={rootClassName} {...rest}>
        <span className="mdc-fab__icon">
          {children}
        </span>
      </button>
    )
  }
}
