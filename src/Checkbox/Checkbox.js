// @flow
import React from 'react'
import cx from 'classnames'
import { MDCCheckboxFoundation } from '@material/checkbox/dist/mdc.checkbox'
import { MDCRippleFoundation, util } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'
import * as helper from '../helper'
import type { PropsT } from '../types'

/** rest props is passed to `<input>` element instead of root `<div>` element */
class Checkbox extends React.Component {
  props: {
    checked: boolean,
    onChange: Function,
    theme?: 'dark',
    disabled?: boolean,
  } & PropsT
  foundation_: any
  root_: any
  nativeCb_: any
  ripple_: any

  state = {
    rootProps: { className: new Set() },
    nativeCbProps: {},
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCCheckboxFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      registerAnimationEndHandler: helper.registerHandler('rootProps', this, 'animationend'),
      deregisterAnimationEndHandler: helper.deregisterHandler('rootProps', this, 'animationed'),
      registerChangeHandler: helper.registerHandler('nativeCbProps', this, 'change'),
      deregisterChangeHandler: helper.deregisterHandler('nativeCbProps', this, 'change'),
      getNativeControl: () => this.nativeCb_,
      forceLayout: () => this.root_.offsetWidth,
      isAttachedToDOM: helper.isAttachedToDOM('root', this),
    })
  }

  initRipple_() {
    const MATCHES = util.getMatchesProperty(HTMLElement.prototype)
    const adapter = Ripple.createAdapter(this, {
      isUnbounded: () => true,
      isSurfaceActive: () => this.nativeCb_[MATCHES](':active'),
      registerInteractionHandler: (type, handler) =>
        this.nativeCb_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) =>
        this.nativeCb_.removeEventListener(type, handler),
      computeBoundingRect: () => {
        const { left, top } = this.root_.getBoundingClientRect()
        const DIM = 40
        return {
          top,
          left,
          right: left + DIM,
          bottom: top + DIM,
          width: DIM,
          height: DIM,
        }
      },
    })
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
      checked,
      onChange,
      children,
      className,
      theme,
      disabled,
      ...rest
    } = this.props
    const { rootProps, nativeCbProps } = this.state
    const rootClassName = cx(
      'mdc-checkbox',
      {
        [`mdc-checkbox--theme-${theme}`]: theme,
        'mdc-checkbox--disabled': disabled,
      },
      Array.from(rootProps.className),
      className
    )
    return (
      <div ref={v => (this.root_ = v)} {...rootProps} className={rootClassName}>
        <input
          ref={v => (this.nativeCb_ = v)}
          type="checkbox"
          className="mdc-checkbox__native-control"
          {...nativeCbProps}
          {...rest}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />
        <div className="mdc-checkbox__background">
          <svg className="mdc-checkbox__checkmark" viewBox="0 0 24 24">
            <path
              className="mdc-checkbox__checkmark__path"
              fill="none"
              stroke="white"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"
            />
          </svg>
        </div>
        <div className="mdc-checkbox__mixedmark" />
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
    this.ripple_ = this.initRipple_()
    this.ripple_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
    this.ripple_.destroy()
  }
}

export default Checkbox
