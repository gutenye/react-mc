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
      className: {
        'mdc-textfield': true,
        'mdc-textfield--upgraded': true,
        'mdc-textfield--disabled': this.props.disabled,
        'mdc-textfield--multiline': this.props.multiline,
        'mdc-textfield--fullwidth': this.props.fullwidth,
        'mdc-textfield--box': this.props.box,
      },
    },
    labelProps: {
      className: {
        'mdc-textfield__label': true,
        'mdc-textfield__label--float-above': Boolean(this.props.value),
      },
    },
    inputProps: {},
    helptextProps: {
      className: {
        'mdc-textfield-helptext': true,
        'mdc-textfield-helptext--validation-msg': this.props.validationMsg,
        'mdc-textfield-helptext--persistent': this.props.persistent,
      },
    },
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
    const rootClassName = cx(rootProps.className, className)
    const labelClassName = cx(labelProps.className)
    const helptextClassName = cx(helptextProps.className)

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
