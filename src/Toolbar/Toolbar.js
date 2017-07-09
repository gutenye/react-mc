// @flow
import React from 'react'
import cx from 'classnames'
import { MDCToolbarFoundation, util } from '@material/toolbar'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Toolbar extends React.Component {
  static FixedAdjust: any
  static Icon: any
  static Row: any
  static Section: any
  static Title: any

  props: {
    fixed?: boolean,
    waterfall?: boolean,
    fixedLastrowOnly?: boolean,
    flexible?: boolean,
    flexibleDefaultBehavior?: boolean,
    onChange: Function,
  } & PropsT
  foundation_: any
  root_: any
  firstRowElement_: any
  titleElement_: any

  static defaultProps = {
    onChange: () => {},
  }

  state = {
    rootProps: { className: new Set(['mdc-toolbar']) },
  }

  getDefaultFoundation() {
    this.firstRowElement_ = this.root_.querySelector(
      MDCToolbarFoundation.strings.FIRST_ROW_SELECTOR
    )
    this.titleElement_ = this.root_.querySelector(
      MDCToolbarFoundation.strings.TITLE_SELECTOR
    )
    // prettier-ignore
    return new MDCToolbarFoundation({
      hasClass: helper.hasClass('rootProps', this),
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler, util.applyPassive()),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler, util.applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportWidth: () => window.innerWidth,
      getViewportScrollY: () => window.pageYOffset,
      getOffsetHeight: () => this.root_.offsetHeight,
      getFirstRowElementOffsetHeight: () => this.firstRowElement_.offsetHeight,
      notifyChange: this.props.onChange,
      setStyle: (property, value) => this.root_.style.setProperty(property, value),
      setStyleForTitleElement: (property, value) => this.titleElement_.style.setProperty(property, value),
      setStyleForFlexibleRowElement: (property, value) => this.firstRowElement_.style.setProperty(property, value),
      setStyleForFixedAdjustElement: (property, value) => {
        if (this.fixedAdjustElement) {
          this.fixedAdjustElement.style.setProperty(property, value);
        }
      },
    })
  }

  render() {
    const {
      fixed,
      waterfall,
      fixedLastrowOnly,
      flexible,
      flexibleDefaultBehavior,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(
      {
        'mdc-toolbar--fixed': fixed,
        'mdc-toolbar--waterfall': waterfall,
        'mdc-toolbar--fixed-lastrow-only': fixedLastrowOnly,
        'mdc-toolbar--flexible': flexible,
        'mdc-toolbar--flexible-default-behavior': flexibleDefaultBehavior,
      },
      Array.from(rootProps.className),
      className
    )
    return (
      <header
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </header>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default Toolbar
