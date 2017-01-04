import '@material/checkbox/dist/mdc.checkbox.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { Set } from 'immutable'
import { MDCCheckboxFoundation } from '@material/checkbox'
import * as helper from '../helper'

const { ANIM_END_EVENT_NAME } = MDCCheckboxFoundation.strings

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    checked: false,
    onChange: () => {}
  }

  state = {
    classes: new Set(),
    checked: this.props.checked,
  }

  foundation = new MDCCheckboxFoundation({
    addClass: helper.addClass('rootClassName', this),
    removeClass: helper.removeClass('rootClassName', this),
    getNativeControl: helper.getNative('input', this),
    isAttachedToDOM: helper.isAttachedToDOM('input', this),
    registerAnimationEndHandler: helper.registerHandler('root', ANIM_END_EVENT_NAME, this),
    deregisterAnimationEndHandler: helper.deregisterHandler('root', ANIM_END_EVENT_NAME, this),
    registerChangeHandler: helper.registerHandler('input', 'change', this),
    deregisterChangeHandler: helper.deregisterHandler('input', 'change', this),
    forceLayout: () => {
      if (this.refs.input) {
        this.refs.input.offsetWidth
      }
    },
  })

  render() {
    const {children, className, ...rest} = this.props
    let {classes, checked} = this.state
    classes = cx('mdc-checkbox', classes.toJS(), className)
    return (
      <div ref='root' className={classes} {...rest}>
       <input ref='input' type='checkbox' className='mdc-checkbox__native-control' checked={checked} onChange={this.onChange} />
       <div className='mdc-checkbox__background'>
         <svg version='1.1' className='mdc-checkbox__checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' xmlSpace='preserve'>
           <path className='mdc-checkbox__checkmark__path' fill='none' stroke='white' d='M1.73,12.91 8.1,19.28 22.79,4.59'/>
         </svg>
       </div>
       <div className='mdc-checkbox__mixedmark'></div>
      </div>
    )
  }

  componentDidMount() {
    this.foundation.init()
  }

  componentWillUnmount() {
    this.foundation.destroy()
  }

  onChange = (e) => {
    this.setState({checked: e.target.checked})
  }
}
