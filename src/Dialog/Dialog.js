// @flow
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { MDCDialogFoundation, util } from '@material/dialog'
import * as helper from '../helper'

type PropsT = {
  open: boolean,
  onClose: Function,
  onAccept: Function,
  onCancel: Function,
  className?: string,
  children: any,
}

class Dialog extends React.Component {
  static Backdrop: any
  static Body: any
  static Footer: any
  static Header: any
  static Surface: any
  props: PropsT
  foundation_: any
  root_: any

  static defaultProps = {
    onClose: () => {},
    onAccept: () => {},
    onCancel: () => {},
  }

  static childContextTypes = {
    surfaceProps: PropTypes.object,
  }

  getChildContext() {
    return { surfaceProps: this.state.surfaceProps }
  }

  state = {
    rootProps: { className: new Set() },
    surfaceProps: {},
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCDialogFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      addBodyClass: helper.addClass(document.body),
      removeBodyClass: helper.removeClass(document.body),
      eventTargetHasClass: helper.eventTargetHasClass(),
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterHandler('rootProps', this),
      registerSurfaceInteractionHandler: helper.registerHandler('surfaceProps', this),
      deregisterSurfaceInteractionHandler: helper.deregisterHandler('surfaceProps', this),
      registerDocumentKeydownHandler: helper.registerHandler(document, 'keydown'),
      deregisterDocumentKeydownHandler: helper.deregisterHandler(document, 'keydown'),
      registerTransitionEndHandler: helper.registerHandler('surfaceProps', this, 'transitionend'),
      deregisterTransitionEndHandler: helper.deregisterHandler('surfaceProps', this, 'transitionend'),
      notifyAccept: this.onAccept,
      notifyCancel: this.onCancel,
      trapFocusOnSurface: () => this.focusTrap_ && this.focusTrap_.activate(),
      untrapFocusOnSurface: () => this.focusTrap_ && this.focusTrap_.deactivate(),
      isDialog: helper.isElement('.mdc-dialog__surface', this),
    })
  }

  focusTrap_ = null
  focusTrap_ = null

  render() {
    const {
      className,
      open,
      onClose,
      onAccept,
      onCancel,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(
      'mdc-dialog',
      Array.from(rootProps.className),
      className
    )
    return (
      <div>
        <aside
          role="alertdialog"
          {...rootProps}
          className={rootClassName}
          {...rest}
        >
          {children}
        </aside>
      </div>
    )
  }

  componentDidMount() {
    this.focusTrap_ = util.createFocusTrapInstance(
      this.root_.querySelector(
        MDCDialogFoundation.strings.DIALOG_SURFACE_SELECTOR
      ),
      this.root_.querySelector(MDCDialogFoundation.strings.ACCEPT_SELECTOR)
    )

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

  onAccept = () => {
    this.props.onAccept()
    this.props.onClose()
  }

  onCancel = () => {
    this.props.onCancel()
    this.props.onClose()
  }
}

export default Dialog
