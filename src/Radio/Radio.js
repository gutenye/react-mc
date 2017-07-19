// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRadioFoundation } from '@material/radio/dist/mdc.radio'
import * as helper from '../helper'
import type { PropsT } from '../types'

/** rest props is passed to `<input>` element instead of root `<div>` element */
class Radio extends React.Component {
  props: {
    checked: boolean,
    onChange: Function,
    disabled?: boolean,
  } & PropsT
  foundation_: any
  root_: any
  nativeCb_: any

  state = {
    rootProps: {
      className: {
        'mdc-radio': true,
        'mdc-radio--disabled': this.props.disabled,
      },
    },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCRadioFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      getNativeControl: () => this.nativeCb_,
    })
  }

  render() {
    const { checked, onChange, disabled, className, ...rest } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <div ref={v => (this.root_ = v)} {...rootProps} className={rootClassName}>
        <input
          ref={v => (this.nativeCb_ = v)}
          type="radio"
          className="mdc-radio__native-control"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <div className="mdc-radio__background">
          <div className="mdc-radio__outer-circle" />
          <div className="mdc-radio__inner-circle" />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default Radio
