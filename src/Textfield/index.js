import '@material/textfield/dist/mdc.textfield.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { MDCTextfieldFoundation } from '@material/textfield'
import * as helper from '../helper'

class Textfield extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    helptext: PropTypes.string,
    presistent: PropTypes.bool,
    multiline: PropTypes.bool,
  }

  static defaultProps = {
    label: '',
    helptext: '',
  }

  state = {
    rootClassName: [],
    labelClassName: [],
    helptextClassName: [],
    helptextAttr: {},
  }

  foundation = new MDCTextfieldFoundation({
    addClass: helper.addClass('rootClassName', this),
    removeClass: helper.removeClass('rootClassName', this),
    addClassToLabel: helper.addClass('labelClassName', this),
    removeClassFromLabel: helper.removeClass('labelClassName', this),
    addClassToHelptext: helper.addClass('helptextClassName', this),
    removeClassFromLabel: helper.removeClass('helptextClassName', this),
    helptextHasClass: helper.hasClass('helptext', this),
    setHelptextAttr: helper.setAttr('helptextAttr', this),
    removeHelptextAttr: helper.removeAttr('helptextAttr', this),
    registerInputFocusHandler: helper.registerHandler('input', 'focus', this),
    deregisterInputFocusHandler: helper.deregisterHandler('input', 'focus', this),
    registerInputBlurHandler: helper.registerHandler('input', 'blur', this),
    deregisterInputBlurHandler: helper.deregisterHandler('input', 'blur', this),
    getNativeInput: helper.getNative('input', this),
  })

  render() {
    const {disabled, label, helptext, presistent, multiline, children, className, ...rest} = this.props
    const {helptextAttr} = this.state
    const rootClassName = cx('mdc-textfield', 'mdc-textfield--upgraded', this.state.rootClassName, {
      'mdc-textfield--disabled': disabled,
    }, className)
    const labelClassName = cx('mdc-textfield__label', this.state.labelClassName, {
      'mdc-textfield__label--float-above': !! rest.value
    })
    const helptextClassName = cx('mdc-textfield-helptext', this.state.helptextClassName, {
      'mdc-textfield-helptext--presistent': presistent
    })
    return (
      <div>
        <label className={rootClassName}>
          {multiline ?
          <textarea ref='input' className='mdc-textfield__input' {...rest}></textarea> :
          <input ref='input' className='mdc-textfield__input' {...rest} />
          }
          <span className={labelClassName}>{label}</span>
        </label>
        <p ref='helptext' className={helptextClassName} aria-hidden='true' {...helptextAttr}>
          {helptext}
        </p>
      </div>
    )
  }

  componentDidMount() {
    this.foundation.init()
  }

  componentWillUnmount() {
    this.foundation.destroy()
  }
}

export default Textfield