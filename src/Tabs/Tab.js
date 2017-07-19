// @flow
import React from 'react'
import cx from 'classnames'
import { MDCTabFoundation } from '@material/tabs'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Tab extends React.Component {
  static displayName = 'Tabs.Tab'
  props: {
    active?: boolean,
    withIconAndText?: boolean,
    onSelected: Function,
  } & PropsT
  foundation_: any
  root_: any

  state = {
    rootProps: {
      className: {
        'mdc-tab': true,
        'mdc-tab--with-icon-and-text': this.props.withIconAndText,
      },
    },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCTabFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.registerHandler('rootProps', this),
      getOffsetWidth: () => this.root_.offsetWidth,
      getOffsetLeft: () => this.root_.offsetLeft,
      notifySelected: () => this.props.onSelected({detail: {tab: this}}),
    })
  }

  render() {
    const {
      active,
      withIconAndText,
      onSelected,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <div
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
    this.isActive = this.props.active
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  get isActive() {
    return this.foundation_.isActive()
  }

  set isActive(isActive) {
    this.foundation_.setActive(isActive)
  }

  get preventDefaultOnClick() {
    return this.foundation_.preventsDefaultOnClick()
  }

  set preventDefaultOnClick(preventDefaultOnClick) {
    this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick)
  }

  measureSelf() {
    this.foundation_.measureSelf()
  }

  get computedWidth() {
    return this.foundation_.getComputedWidth()
  }

  get computedLeft() {
    return this.foundation_.getComputedLeft()
  }
}

export default Tab
