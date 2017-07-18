// @flow
import React from 'react'
import cx from 'classnames'
import { MDCTextfieldFoundation } from '@material/textfield/dist/mdc.textfield'
import * as helper from '../helper'
import type { PropsT } from '../types'

/** rest props is passed to `<input>` element instead of root `<div>` element */
class Textfield extends React.Component {
  props: {
    value: string,
    onChange: Function,
    disabled?: boolean,
    label?: string,
    helptext?: string,
    persistent?: boolean,
    multiline?: boolean,
    validationMsg?: boolean,
    fullwidth?: boolean,
    box?: boolean,
  } & PropsT
  foundation_: any
  input_: any

  static defaultProps = {
    label: '',
    helptext: '',
  }

  state = {
    rootProps: {
      className: new Set(['mdc-textfield', 'mdc-textfield--upgraded']),
    },
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
      value,
      onChange,
      disabled,
      label,
      helptext,
      persistent,
      multiline,
      children,
      className,
      validationMsg,
      fullwidth,
      box,
      ...rest
    } = this.props
    const { rootProps, labelProps, helptextProps, inputProps } = this.state
    const rootClassName = cx(
      Array.from(rootProps.className),
      {
        'mdc-textfield--disabled': disabled,
        'mdc-textfield--multiline': multiline,
        'mdc-textfield--fullwidth': fullwidth,
        'mdc-textfield--box': box,
      },
      className
    )
    const labelClassName = cx(
      'mdc-textfield__label',
      Array.from(labelProps.className),
      {
        'mdc-textfield__label--float-above': Boolean(rest.value),
      }
    )
    const helptextClassName = cx(
      'mdc-textfield-helptext',
      Array.from(helptextProps.className),
      {
        'mdc-textfield-helptext--validation-msg': validationMsg,
        'mdc-textfield-helptext--persistent': persistent,
      }
    )

    const textfield = (
      <div {...rootProps} className={rootClassName}>
        {multiline
          ? <textarea
              ref={v => (this.input_ = v)}
              {...inputProps}
              className="mdc-textfield__input"
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...rest}
            />
          : <input
              ref={v => (this.input_ = v)}
              {...inputProps}
              className="mdc-textfield__input"
              disabled={disabled}
              value={value}
              onChange={onChange}
              {...rest}
            />}
        {fullwidth
          ? null
          : label &&
            <label {...labelProps} className={labelClassName}>
              {label}
            </label>}
        {box && <div className="mdc-textfield__bottom-line" />}
      </div>
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
