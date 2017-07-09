import React from 'react'
import cx from 'classnames'
import { MDCPersistentDrawerFoundation, util } from '@material/drawer'
import * as helper from '../../helper'
import type { PropsT } from '../../types'

class PersistentDrawer extends React.Component {
  static Content: any
  static Drawer: any
  static Header: any
  static HeaderContent: any

  props: {
    open: boolean,
    onOpen: Function,
    onClose: Function,
  } & PropsT
  foundation_: any
  root_: any
  drawer: any

  static defaultProps = {
    onOpen: () => {},
    onClose: () => {},
  }

  state = {
    rootProps: {
      className: new Set(['mdc-persistent-drawer', 'mdc-typography']),
    },
  }

  getDefaultFoundation() {
    const { FOCUSABLE_ELEMENTS } = MDCPersistentDrawerFoundation.strings
    this.drawer = this.root_.querySelector(
      MDCPersistentDrawerFoundation.strings.DRAWER_SELECTOR
    )
    // prettier-ignore
    return new MDCPersistentDrawerFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      hasClass: helper.hasClass('rootProps', this),
      hasNecessaryDom: () => Boolean(this.drawer),
      registerInteractionHandler: (evt, handler) =>
          this.root_.addEventListener(util.remapEvent(evt), handler, util.applyPassive()),
      deregisterInteractionHandler: (evt, handler) =>
          this.root_.removeEventListener(util.remapEvent(evt), handler, util.applyPassive()),
      registerDrawerInteractionHandler: (evt, handler) =>
          this.drawer.addEventListener(util.remapEvent(evt), handler),
      deregisterDrawerInteractionHandler: (evt, handler) =>
          this.drawer.removeEventListener(util.remapEvent(evt), handler),
      registerTransitionEndHandler: helper.registerHandler('rootProps', this, 'transitionend'),
      deregisterTransitionEndHandler: helper.deregisterHandler('rootProps', this, 'transitionend'),
      registerDocumentKeydownHandler: helper.registerHandler(document, 'keydown'),
      deregisterDocumentKeydownHandler: helper.deregisterHandler(document, 'keydown'),
      getDrawerWidth: () => this.drawer.offsetWidth,
      setTranslateX: (value) => this.drawer.style.setProperty(
          util.getTransformPropertyName(), value === null ? null : `translateX(${value}px)`),
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
    const rootClassName = cx(Array.from(rootProps.className), className)
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

export default PersistentDrawer
