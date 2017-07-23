// @flow
import React from 'react'
import cx from 'classnames'
import { MDCTabFoundation } from '@material/tabs/dist/mdc.tabs'
import * as helper from '../helper'
import type { PropsC } from '../types'

class Tab extends React.Component {
  props: {
    active?: boolean,
    withIconAndText?: boolean,
    /** onSelect(tab) */
    onSelected: Function,
    /** private */
    onSelected_: Function,
  } & PropsC

  static defaultProps = {
    component: 'div',
    onSelected_: () => {},
  }
  static displayName = 'Tabs.Tab'
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
      notifySelected: () => {
        const tab = this
        this.props.onSelected_({detail: {tab}})
        this.props.onSelected(tab)
      }
    })
  }

  render() {
    const {
      component: Component,
      active,
      withIconAndText,
      onSelected,
      onSelected_,
      className,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      />
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

  get isActive(): boolean {
    return this.foundation_.isActive()
  }

  set isActive(isActive: boolean) {
    this.foundation_.setActive(isActive)
  }

  get preventDefaultOnClick(): boolean {
    return this.foundation_.preventsDefaultOnClick()
  }

  set preventDefaultOnClick(preventDefaultOnClick: boolean) {
    this.foundation_.setPreventDefaultOnClick(preventDefaultOnClick)
  }

  measureSelf() {
    this.foundation_.measureSelf()
  }

  get computedWidth(): number {
    return this.foundation_.getComputedWidth()
  }

  get computedLeft(): number {
    return this.foundation_.getComputedLeft()
  }
}

export default Tab
