import '@material/Radio/dist/mdc.Radio.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { Set } from 'immutable'
import { MDCRadioFoundation } from '@material/radio'
import * as helper from '../helper'

class Radio extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }
  static propTypes = {
    onChange: () => {},
  }

  state = {
    rootClassName: new Set(),
  }

  foundation = new MDCRadioFoundation({
    addClass: helper.addClass('rootClassName', this),
    removeClass: helper.removeClass('rootClassName', this),
    getNativeControl: helper.getNative('input', this),
  })

  render() {
    const {disabled, name, checked, onChange, children, className, ...rest} = this.props
    const {rootClassName} = this.state
    const c = cx('mdc-radio', rootClassName.toJS(), {
      'mdc-radio--disabled': disabled,
    }, className)
    return (
      <div style={{display: 'inline-block'}}>
        <div ref='root' className={c} {...rest}>
          <input ref='input' className='mdc-radio__native-control' type='radio' name={name} checked={checked} />
          <div className='mdc-radio__background'>
            <div className='mdc-radio__outer-circle'></div>
            <div className='mdc-radio__inner-circle'></div>
          </div>
        </div>
        <label>{children}</label>
      </div>
    )
  }
}

export default Radio
