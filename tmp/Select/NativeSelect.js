import '@material/select/dist/mdc.select.css'
import React from 'react'
import cx from 'classnames'

class NativeSelect extends React.Component {
  static propTypes = {}

  render() {
    const { children, className, ...rest } = this.props
    const rootClassName = cx('mdc-select', className)
    return (
      <select className={rootClassName} {...rest}>
        {children}
      </select>
    )
  }
}

export default NativeSelect
