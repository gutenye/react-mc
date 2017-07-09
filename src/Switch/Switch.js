// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class Switch extends React.Component {
  props: {
    checked: boolean,
    onChange: Function,
    disabled?: boolean,
  } & PropsT

  static defaultProps = {
    onChange: () => {},
  }

  render() {
    const {
      checked,
      onChange,
      disabled,
      className,
      children,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-switch',
      {
        'mdc-switch--disabled': disabled,
      },
      className
    )
    return (
      <div className={rootClassName} {...rest}>
        <input
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          type="checkbox"
          className="mdc-switch__native-control"
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    )
  }
}

export default Switch
