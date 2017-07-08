// @flow
import React from 'react'
import cx from 'classnames'
import { MDCCheckboxFoundation } from '@material/checkbox'
import { MDCRippleFoundation } from '@material/ripple'
import { getMatchesProperty } from '@material/ripple/util'
import Ripple from '../Ripple'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Checkbox extends React.Component {
  props: {
    checked: boolean,
    onChange: Function,
    theme?: 'dark',
    disabled?: boolean,
  } & PropsT
  root_: any
  nativeCb_: any
  ripple_: any

  static defaultProps = {
    checked: false,
    onChange: () => {},
  }

  state = {
    rootProps: { className: new Set() },
    nativeCbProps: {},
    checked: this.props.checked,
  }

  // prettier-ignore
  foundation_ = new MDCCheckboxFoundation({
    addClass: helper.addClass('rootProps', this),
    removeClass: helper.removeClass('rootProps', this),
    registerAnimationEndHandler: helper.registerHandler('rootProps', this, 'animationend'),
    deregisterAnimationEndHandler: helper.deregisterHandler('rootProps', this, 'animationed'),
    registerChangeHandler: helper.registerHandler('nativeCbProps', this, 'change'),
    deregisterChangeHandler: helper.deregisterHandler('nativeCbProps', this, 'change'),
    getNativeControl: helper.getNative('nativeCb', this),
    forceLayout: () => this.refs.root.offsetWidth,
    isAttachedToDOM: helper.isAttachedToDOM('root', this),
  })

  initRipple_() {
    this.root_ = this.refs.root
    this.nativeCb_ = this.refs.nativeCb
    const MATCHES = getMatchesProperty(HTMLElement.prototype)
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
    const { children, className, theme, disabled, ...rest } = this.props
    const { rootProps, nativeCbProps, checked } = this.state
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
      <div ref="root" {...rootProps} className={rootClassName} {...rest}>
        <input
          ref="nativeCb"
          type="checkbox"
          className="mdc-checkbox__native-control"
          {...nativeCbProps}
          checked={checked}
          disabled={disabled}
          onChange={this.onChange}
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
    this.foundation_.init()
    this.ripple_ = this.initRipple_()
    this.ripple_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
    this.ripple_.destroy()
  }

  onChange = (e: any) => {
    this.setState({ checked: e.target.checked })
  }
}

export default Checkbox
