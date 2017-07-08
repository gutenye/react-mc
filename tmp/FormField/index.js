import '@material/form-field/dist/mdc.form-field.css'
import React from 'react'
import cx from 'classnames'

export default class FormField extends React.Component {
  static propTypes = {
    alignEnd: PropTypes.bool,
  }

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-form-field',
      {
        'mdc-form-field--align-end': alignEnd,
      },
      className
    )
    return (
      <div className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }
}
