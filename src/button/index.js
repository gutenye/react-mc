import '@material/button/dist/mdc.button.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class Button extends Component {
  static propTypes = {
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
  }

  render() {
    const {dense, raised, compact, primary, accent, className, children, ...rest} = this.props
    const classes = cx('mdc-button', {
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
      'mdc-button--compact': compact,
      'mdc-button--primary': primary,
      'mdc-button--accent': accent,
    }, className)
    return (
      <button className={classes} {...rest}>
        {children}
      </button>
    )
  }
}

export default Button
