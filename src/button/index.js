import '@material/button/dist/mdc.button.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export class Button extends Component {
  static propTypes = {
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
  }

  render() {
    const {dense, raised, compact, primary, accent, children, ...rest} = this.props
    const className = cx('mdc-button', {
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
      'mdc-button--compact': compact,
      'mdc-button--primary': primary,
      'mdc-button--accent': accent,
    })
    return (
      <button className={className} {...rest}>
        {children}
      </button>
    )
  }
}
