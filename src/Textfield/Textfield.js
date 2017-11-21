// @flow
import React from 'react'
import cx from 'classnames'
import { MDCTextFieldFoundation } from '@material/textfield/dist/mdc.textfield'
import * as helper from '../helper'
import type { PropsC } from '../types'

const { cssClasses, strings } = MDCTextFieldFoundation

/** rest props is passed to `<input>` element instead of root `<div>` element */
class TextField extends React.Component {
  props: {
    value: string,
    onChange: Function,
    disabled?: boolean,
    label?: string,
    helptext?: string,
    persistent?: boolean,
    textarea?: boolean,
    validationMsg?: boolean,
    fullwidth?: boolean,
    box?: boolean,
    leadingIcon?: any,
    trailingIcon?: any,
  } & PropsC

  static defaultProps = {
    component: 'div',
    label: '',
    helptext: '',
  }
  foundation_: any
  input_: any
  icon_: any

  state = {
    rootProps: {
      className: {
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': this.props.disabled,
        'mdc-text-field--textarea': this.props.textarea,
        'mdc-text-field--fullwidth': this.props.fullwidth,
        'mdc-text-field--box': this.props.box,
        'mdc-text-field--with-leading-icon': this.props.leadingIcon,
        'mdc-text-field--with-trailing-icon': this.props.trailingIcon,
      },
    },
    labelProps: {
      className: {
        'mdc-text-field__label': true,
        'mdc-text-field__label--float-above': Boolean(this.props.value),
      },
    },
    inputProps: {},
    helptextProps: {
      className: {
        'mdc-text-field-helptext': true,
        'mdc-text-field-helptext--validation-msg': this.props.validationMsg,
        'mdc-text-field-helptext--persistent': this.props.persistent,
      },
    },
  }

  getDefaultFoundation() {
    if (!this.root_.classList.contains(cssClasses.TEXT_FIELD_ICON)) {
      this.icon_ = this.root_.querySelector(strings.ICON_SELECTOR)
    }

    // prettier-ignore
    return new MDCTextFieldFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      addClassToLabel: helper.addClass('labelProps', this),
      removeClassFromLabel: helper.removeClass('labelProps', this),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      registerTextFieldInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterTextFieldInteractionHandler: helper.deregisterHandler('rootProps', this),
      // notifyIconAction
      // registerBottomLineEventHandler
      // deregisterBottomLineEventHandler
      // getBottomLineFoundation
      ...this.getInputAdapterMethods_(),
      ...this.getHelperTextAdapterMethods_(),
      ...this.getIconAdapterMethods_(),
    })
  }

  getIconAdapterMethods_() {
    return {
      setIconAttr: (name, value) => {
        if (this.icon_) {
          this.icon_.setAttribute(name, value)
        }
      },
    }
  }

  getInputAdapterMethods_() {
    return {
      registerInputInteractionHandler: helper.registerHandler(
        'inputProps',
        this
      ),
      deregisterInputInteractionHandler: helper.deregisterHandler(
        'inputProps',
        this
      ),
      getNativeInput: () => this.input_,
    }
  }

  getHelperTextAdapterMethods_() {
    return {
      addClassToHelptext: helper.addClass('helptextProps', this),
      removeClassFromHelptext: helper.removeClass('helptextProps', this),
      helptextHasClass: helper.hasClass('helptextProps', this),
      setHelptextAttr: helper.setAttr('helptextProps', this),
      removeHelptextAttr: helper.rmAttr('helptextProps', this),
    }
  }

  render() {
    const {
      component: Component,
      value,
      onChange,
      disabled,
      label,
      helptext,
      persistent,
      textarea,
      className,
      validationMsg,
      fullwidth,
      box,
      leadingIcon,
      trailingIcon,
      ...rest
    } = this.props
    const { rootProps, labelProps, helptextProps, inputProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    const labelClassName = cx(labelProps.className)
    const helptextClassName = cx(helptextProps.className)

    const textField = (
      <Component
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
      >
        {leadingIcon}
        {textarea ? (
          <textarea
            ref={v => (this.input_ = v)}
            {...inputProps}
            className="mdc-text-field__input"
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...rest}
          />
        ) : (
          <input
            ref={v => (this.input_ = v)}
            {...inputProps}
            className="mdc-text-field__input"
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...rest}
          />
        )}
        {fullwidth
          ? null
          : label && (
              <label {...labelProps} className={labelClassName}>
                {label}
              </label>
            )}
        {trailingIcon}
        <div className="mdc-text-field__bottom-line" />
      </Component>
    )

    if (helptext)
      return (
        <div>
          {textField}
          <p
            {...helptextProps}
            className={helptextClassName}
            aria-hidden="true"
          >
            {helptext}
          </p>
        </div>
      )
    else return textField
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default TextField
