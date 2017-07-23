// @flow
import React from 'react'
import cx from 'classnames'
import { MDCLinearProgressFoundation } from '@material/linear-progress/dist/mdc.linearProgress'
import * as helper from '../helper'
import type { PropsC } from '../types'

type PropsT = {
  /** 0-1 */
  progress: number,
  /** 0-1 */
  buffer?: number,
  inDeterminate?: boolean,
  reversed?: boolean,
  accent?: boolean,
} & PropsC

class LinearProgress extends React.Component {
  props: PropsT

  static defaultProps = {
    component: 'div',
  }
  foundation_: any
  root_: any

  state = {
    rootProps: {
      className: {
        'mdc-linear-progress': true,
        'mdc-linear-progress--indeterminate': this.props.indeterminate,
        'mdc-linear-progress--reversed': this.props.reversed,
        'mdc-linear-progress--accent': this.props.accent,
      },
    },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCLinearProgressFoundation({
      addClass: helper.addClass('rootProps', this),
      getPrimaryBar: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR),
      getBuffer: () => this.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR),
      hasClass: helper.hasClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      setStyle: (el, styleProperty, value) => el.style[styleProperty] = value,
    })
  }

  render() {
    const {
      component: Component,
      progress,
      buffer,
      indeterminate,
      reversed,
      accent,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        role="progressbar"
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        <div className="mdc-linear-progress__buffering-dots" />
        <div className="mdc-linear-progress__buffer" />
        <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
        <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
          <span className="mdc-linear-progress__bar-inner" />
        </div>
      </Component>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
    this.init(this.props)
  }

  componentWillReceiveProps(nextProps: PropsT) {
    this.init(nextProps)
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  init(props: PropsT) {
    const { progress, buffer } = props
    if (progress) this.foundation_.setProgress(progress)
    if (buffer) this.foundation_.setBuffer(buffer)
  }
}

export default LinearProgress
