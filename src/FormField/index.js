import '@material/form-field/dist/mdc.form-field.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class FormField extends Component {
  static propTypes = {
    alignEnd: PropTypes.bool,
  }

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-form-field', {
      'mdc-form-field--align-end': alignEnd
    }, className)
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }
}
