import '@material/select/dist/mdc.select.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

class NativeSelect extends Component {
  static propTypes = {}

  render() {
    const {children, className, ...rest} = this.props
    const classes = cx('mdc-select', className)
    return (
      <select className={classes} {...rest}>
        {children}
      </select>
    )
  }
}

export default NativeSelect
