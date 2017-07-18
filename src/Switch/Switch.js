// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

/** rest props is passed to `<input>` element instead of root `<div>` element */
class Switch extends React.Component {
  props: {
    checked: boolean,
    onChange: Function,
    disabled?: boolean,
  } & PropsT

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
      <div className={rootClassName}>
        <input
          type="checkbox"
          className="mdc-switch__native-control"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
    )
  }
}

export default Switch
