// @flow
import React from 'react'
import cx from 'classnames'
import { MDCIconToggleFoundation } from '@material/icon-toggle'
import { MDCRippleFoundation } from '@material/ripple'
import Ripple from '../Ripple'
import * as helper from '../helper'
import type { PropsT } from '../types'

class IconToggle extends React.Component {
  props: {
    on: boolean,
    /** onChange(detail); detail: {isOn} */
    onChange: Function,
    dataToggleOn: Object,
    dataToggleOff: Object,
  } & PropsT
  foundation_: any
  ripple_: any
  root_: any
  iconEl_: any

  state = {
    rootProps: {
      className: new Set(['mdc-icon-toggle']),
      role: 'button',
      tabIndex: 0,
      'aria-pressed': 'false',
      'aria-label': 'Add to favorites',
      'data-toggle-on': JSON.stringify(this.props.dataToggleOn),
      'data-toggle-off': JSON.stringify(this.props.dataToggleOff),
    },
  }

  getDefaultFoundation() {
    const { iconInnerSelector: sel } = this.root_.dataset
    this.iconEl_ = sel ? this.root_.querySelector(sel) : this.root_
    // prettier-ignore
    return new MDCIconToggleFoundation({
      addClass: (className) => this.iconEl_.classList.add(className),
      removeClass: (className) => this.iconEl_.classList.remove(className),
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterHandler('rootProps', this),
      setText: (text) => { this.iconEl_.textContent = text },
      getTabIndex: helper.getAttr('rootProps', this, 'tabIndex'),
      setTabIndex: helper.setAttr('rootProps', this, 'tabIndex'),
      getAttr: helper.getAttr('rootProps', this),
      setAttr: helper.setAttr('rootProps', this),
      rmAttr: helper.rmAttr('rootProps', this),
      notifyChange: this.onChange,
    })
  }

  initRipple_() {
    const adapter = Object.assign(Ripple.createAdapter(this), {
      isUnbounded: () => true,
      isSurfaceActive: () => this.foundation_.isKeyboardActivated(),
      computeBoundingRect: () => {
        const dim = 48
        const { left, top } = this.root_.getBoundingClientRect()
        return {
          left,
          top,
          width: dim,
          height: dim,
          right: left + dim,
          bottom: left + dim,
        }
      },
    })
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
      on,
      dataToggleOn,
      dataToggleOff,
      onChange,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(Array.from(rootProps.className), className)
    return (
      <i
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </i>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
    this.ripple_ = this.initRipple_()
    this.ripple_.init()

    if (this.props.on) {
      this.foundation_.toggle(true)
    }
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (
      nextProps.on !== this.props.on &&
      nextProps.on !== this.foundation_.isOn()
    ) {
      this.foundation_.toggle(this.props.on)
    }
  }

  componentWillUnmount() {
    this.foundation_.destroy()
    this.ripple_.destroy()
  }

  onChange = (detail: any) => {
    this.props.onChange({ detail })
  }
}

export default IconToggle
