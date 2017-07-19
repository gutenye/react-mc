// @flow
import React from 'react'
import cx from 'classnames'
import {
  MDCTemporaryDrawerFoundation,
  util,
} from '@material/drawer/dist/mdc.drawer'
import * as helper from '../../helper'
import { PropsT } from '../../types'

class TemporaryDrawer extends React.Component {
  static displayName = 'Drawer.Temporary'
  static Content: any
  static Drawer: any
  static Header: any
  static HeaderContent: any
  static ToolbarSpacer: any

  props: {
    open: boolean,
    onClose: Function,
    onOpen: Function,
  } & PropsT
  foundation_: any
  root_: any
  drawer: any

  static defaultProps = {
    onOpen: () => {},
  }

  state = {
    rootProps: {
      className: { 'mdc-temporary-drawer': true, 'mdc-typography': true },
    },

    drawerProps: {},
  }

  getDefaultFoundation() {
    this.drawer = this.root_.querySelector(
      MDCTemporaryDrawerFoundation.strings.DRAWER_SELECTOR
    )
    const {
      FOCUSABLE_ELEMENTS,
      OPACITY_VAR_NAME,
    } = MDCTemporaryDrawerFoundation.strings
    // prettier-ignore
    return new MDCTemporaryDrawerFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      hasClass: helper.hasClass('rootProps', this),
      addBodyClass: helper.addClass(document.body),
      removeBodyClass: helper.removeClass(document.body),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(util.remapEvent(evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(util.remapEvent(evt), handler),
      registerTransitionEndHandler: helper.registerHandler('drawerProps', this, 'transitionend'),
      deregisterTransitionEndHandler: helper.deregisterHandler('drawerProps', this, 'transitionend'),
      registerDocumentKeydownHandler: helper.registerHandler(document, 'keydown'),
      deregisterDocumentKeydownHandler: helper.deregisterHandler(document, 'keydown'),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          util.getTransformPropertyName(), value === null ? null : `translateX(${value}px)`),
      updateCssVariable: (value) => {
        if (util.supportsCssCustomProperties()) {
          this.root_.style.setProperty(OPACITY_VAR_NAME, value);
        }
      },
      getFocusableElements: () => this.drawer.querySelectorAll(FOCUSABLE_ELEMENTS),
      saveElementTabState: (el) => util.saveElementTabState(el),
      restoreElementTabState: (el) => util.restoreElementTabState(el),
      makeElementUntabbable: (el) => el.setAttribute('tabindex', -1),
      notifyOpen: this.props.onOpen,
      notifyClose: this.props.onClose,
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      isDrawer: (el) => el === this.drawer,
    })
  }

  render() {
    const { open, onOpen, onClose, className, children, ...rest } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <aside
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </aside>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()

    if (this.props.open) {
      this.foundation_.open()
    }
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (
      nextProps.open !== this.props.open &&
      nextProps.open !== this.foundation_.isOpen()
    ) {
      if (nextProps.open) this.foundation_.open()
      else this.foundation_.close()
    }
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default TemporaryDrawer
