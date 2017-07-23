// @flow
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { MDCToolbarFoundation, util } from '@material/toolbar/dist/mdc.toolbar'
import * as helper from '../helper'
import type { PropsC } from '../types'

class Toolbar extends React.Component {
  props: {
    fixed?: boolean,
    waterfall?: boolean,
    fixedLastrowOnly?: boolean,
    flexible?: boolean,
    flexibleDefaultBehavior?: boolean,
    onChange?: Function,
    onChange_?: Function,
  } & PropsC

  static defaultProps = {
    component: 'header',
    onChange: () => {},
    onChange_: () => {},
  }
  static FixedAdjust: any
  static Icon: any
  static Row: any
  static Section: any
  static Title: any
  foundation_: any
  root_: any
  firstRowElement_: any
  titleElement_: any
  fixedAdjustElement_: any

  static contextTypes = {
    window: PropTypes.any,
  }

  state = {
    rootProps: {
      className: {
        'mdc-toolbar': true,
        'mdc-toolbar--fixed': this.props.fixed,
        'mdc-toolbar--waterfall': this.props.waterfall,
        'mdc-toolbar--fixed-lastrow-only': this.props.fixedLastrowOnly,
        'mdc-toolbar--flexible': this.props.flexible,
        'mdc-toolbar--flexible-default-behavior': this.props
          .flexibleDefaultBehavior,
      },
    },
  }

  getDefaultFoundation() {
    this.firstRowElement_ = this.root_.querySelector(
      MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR
    )
    this.titleElement_ = this.root_.querySelector(
      MDCToolbarFoundation.strings.TITLE_SELECTOR
    )
    // fix for demo
    const window_ = this.context.window || window
    // prettier-ignore
    return new MDCToolbarFoundation({
      hasClass: helper.hasClass('rootProps', this),
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      registerScrollHandler: (handler) => window_.addEventListener('scroll', handler, util.applyPassive()),
      deregisterScrollHandler: (handler) => window_.removeEventListener('scroll', handler, util.applyPassive()),
      registerResizeHandler: (handler) => window_.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window_.removeEventListener('resize', handler),
      getViewportWidth: () => window_.innerWidth,
      getViewportScrollY: () => window_.pageYOffset,
      getOffsetHeight: () => this.root_.offsetHeight,
      getFirstRowElementOffsetHeight: () => this.firstRowElement_.offsetHeight,
      notifyChange: () => {
        this.props.onChange_()
        this.props.onChange()
      },
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      setStyleForTitleElement: (property, value) => this.titleElement_.style.setProperty(property, value),
      setStyleForFlexibleRowElement: (property, value) => this.firstRowElement_.style.setProperty(property, value),
      setStyleForFixedAdjustElement: (property, value) => {
        if (this.fixedAdjustElement_) {
          this.fixedAdjustElement_.style.setProperty(property, value);
        }
      },
    })
  }

  render() {
    const {
      component: Component,
      fixed,
      waterfall,
      fixedLastrowOnly,
      flexible,
      flexibleDefaultBehavior,
      onChange,
      onChange_,
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
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  set fixedAdjustElement(fixedAdjustElement: any) {
    this.fixedAdjustElement_ = fixedAdjustElement.root_
    this.foundation_.updateAdjustElementStyles()
  }
}

export default Toolbar
