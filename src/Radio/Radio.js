// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRadioFoundation } from '@material/radio/dist/mdc.radio'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Radio extends React.Component {
  props: {
    name: string,
    checked: boolean,
    onChange: Function,
    disabled?: boolean,
  } & PropsT

  static defaultProps = {
    onChange: () => {},
  }

  state = {
    rootProps: { className: new Set(['mdc-radio']) },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCRadioFoundation({
      addClass: helper.addClass('rootClassName', this),
      removeClass: helper.removeClass('rootClassName', this),
      getNativeControl: helper.getNative('input', this),
    })
  }

  render() {
    const {
      disabled,
      name,
      checked,
      onChange,
      children,
      className,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(
      Array.from(rootProps.className),
      {
        'mdc-radio--disabled': disabled,
      },
      className
    )
    return (
      <div style={{ display: 'inline-block' }}>
        <div ref="root" {...rootProps} className={rootClassName} {...rest}>
          <input
            ref="input"
            className="mdc-radio__native-control"
            type="radio"
            name={name}
            checked={checked}
            disabled={disabled}
          />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle" />
            <div className="mdc-radio__inner-circle" />
          </div>
        </div>
        <label>
          {children}
        </label>
      </div>
    )
  }
}

export default Radio
