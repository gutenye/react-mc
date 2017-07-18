// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSliderFoundation } from '@material/slider/dist/mdc.slider'
import * as helper from '../helper'
import type { PropsT } from '../types'

type Props = {
  min: number,
  max: number,
  value: number,
  step: number,
  disabled: boolean,
  onChange: Function,
  onInput?: Function,
} & PropsT

class Slider extends React.Component {
  props: Props
  foundation_: any
  root_: any
  thumbContainer_: any
  track_: any

  static defaultProps = {
    min: 0,
    max: 100,
    value: 0,
    step: 0,
    onInput: () => {},
  }

  state = {
    rootProps: { className: new Set(['mdc-slider']) },
    thumbContainerProps: {},
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCSliderFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      getAttribute: helper.getAttr('rootProps', this),
      setAttribute: helper.setAttr('rootProps', this),
      removeAttribute: helper.rmAttr('rootProps', this),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      getTabIndex: () => this.root_.tabIndex,
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterHandler('rootProps', this),
      registerThumbContainerInteractionHandler: helper.registerHandler('thumbContainerProps', this),
      deregisterThumbContainerInteractionHandler: helper.deregisterHandler('thumbContainerProps', this),
      registerBodyInteractionHandler: helper.registerHandler(document.body),
      deregisterBodyInteractionHandler: helper.deregisterHandler(document.body),
      registerResizeHandler: helper.registerHandler(window, 'resize'),
      deregisterResizeHandler: helper.deregisterHandler(window, 'resize'),
      notifyInput: () => this.props.onInput({ detail: this.foundation_ }),
      notifyChange: () => this.props.onChange({ detail: this.foundation_ }),
      setThumbContainerStyleProperty: (propertyName, value) => {
        this.thumbContainer_.style.setProperty(propertyName, value)
      },
      setTrackStyleProperty: (propertyName, value) => {
        this.track_.style.setProperty(propertyName, value)
      },
      isRTL: () => getComputedStyle(this.root_).direction === 'rtl',
    })
  }

  render() {
    const {
      min,
      max,
      value,
      step,
      disabled,
      className,
      children,
      onChange,
      onInput,
      ...rest
    } = this.props
    const { rootProps, thumbContainerProps } = this.state
    const rootClassName = cx(Array.from(rootProps.className), className)
    return (
      <div
        ref={v => (this.root_ = v)}
        tabIndex="0"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        <div className="mdc-slider__track-container">
          <div ref={v => (this.track_ = v)} className="mdc-slider__track" />
        </div>
        <div
          ref={v => (this.thumbContainer_ = v)}
          className="mdc-slider__thumb-container"
          {...thumbContainerProps}
        >
          <svg className="mdc-slider__thumb" width="21" height="21">
            <circle cx="10.5" cy="10.5" r="7.875" />
          </svg>
          <div className="mdc-slider__focus-ring" />
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()

    this.foundation_.setValue(this.props.value)
    this.foundation_.setStep(this.props.step)
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (
      nextProps.value !== this.props.value &&
      nextProps.value !== this.foundation_.getValue()
    )
      this.foundation_.setValue(nextProps.value)
    if (
      nextProps.step !== this.props.step &&
      nextProps.step !== this.foundation_.getStep()
    )
      this.foundation_.setStep(nextProps.step)
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default Slider
