// @flow
import React from 'react'
import cx from 'classnames'
import { MDCTextfieldFoundation } from '@material/textfield'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Textfield extends React.Component {
  props: {
    disabled?: boolean,
    label?: string,
    helptext?: string,
    persistent?: boolean,
    multiline?: boolean,
  } & PropsT
  foundation_: any
  input_: any

  static defaultProps = {
    label: '',
    helptext: '',
  }

  state = {
    rootProps: { className: new Set(['mdc-textfield']) },
    labelProps: { className: new Set() },
    inputProps: {},
    helptextProps: { className: new Set() },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCTextfieldFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      addClassToLabel: helper.addClass('labelProps', this),
      removeClassFromLabel: helper.removeClass('labelProps', this),
      registerInputFocusHandler: helper.registerHandler('inputProps', this, 'focus'),
      registerInputBlurHandler: helper.registerHandler('inputProps', this, 'blur'),
      registerInputInputHandler: helper.registerHandler('inputProps', this, 'input'),
      registerInputKeydownHandler: helper.registerHandler('inputProps', this, 'keydown'),
      deregisterInputFocusHandler: helper.deregisterHandler('inputProps', this, 'focus'),
      deregisterInputBlurHandler: helper.deregisterHandler('inputProps', this, 'blur'),
      deregisterInputInputHandler: helper.deregisterHandler('inputProps', this, 'input'),
      deregisterInputKeydownHandler: helper.deregisterHandler('inputProps', this, 'keydown'),
      getNativeInput: () => this.input_,
      addClassToHelptext: helper.addClass('helptextProps', this),
      removeClassFromHelptext: helper.removeClass('helptextProps', this),
      helptextHasClass: helper.hasClass('helptextProps', this),
      setHelptextAttr: helper.setAttr('helptextProps', this),
      removeHelptextAttr: helper.rmAttr('helptextProps', this),
    })
  }

  render() {
    const {
      disabled,
      label,
      helptext,
      persistent,
      multiline,
      children,
      className,
      ...rest
    } = this.props
    const { rootProps, labelProps, helptextProps, inputProps } = this.state
    const rootClassName = cx(
      Array.from(rootProps.className),
      'mdc-textfield--upgraded',
      {
        'mdc-textfield--disabled': disabled,
      },
      className
    )
    const labelClassName = cx(
      'mdc-textfield__label',
      Array.from(labelProps.className),
      {
        'mdc-textfield__label--float-above': !!rest.value,
      }
    )
    const helptextClassName = cx(
      'mdc-textfield-helptext',
      Array.from(helptextProps.className),
      {
        'mdc-textfield-helptext--persistent': persistent,
      }
    )
    const textfield = (
      <label {...rootProps} className={rootClassName}>
        {multiline
          ? <textarea
              ref={v => (this.input_ = v)}
              {...inputProps}
              className="mdc-textfield__input"
              disabled={disabled}
              {...rest}
            />
          : <input
              ref={v => (this.input_ = v)}
              {...inputProps}
              className="mdc-textfield__input"
              disabled={disabled}
              {...rest}
            />}
        <span {...labelProps} className={labelClassName}>
          {label}
        </span>
      </label>
    )

    if (helptext)
      return (
        <div>
          {textfield}
          <p
            {...helptextProps}
            className={helptextClassName}
            aria-hidden="true"
          >
            {helptext}
          </p>
        </div>
      )
    else return textfield
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default Textfield
