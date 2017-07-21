// @flow
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { MDCDialogFoundation, util } from '@material/dialog/dist/mdc.dialog'
import type { PropsT } from '../types'
import * as helper from '../helper'

type Props = {
  open: boolean,
  onClose: Function,
  onAccept?: Function,
  onCancel?: Function,
  /** private */
  onAccept_?: Function,
  /** private */
  onCancel_?: Function,
} & PropsT

class Dialog extends React.Component {
  static Backdrop: any
  static Body: any
  static Footer: any
  static Header: any
  static Surface: any
  props: Props
  foundation_: any
  root_: any

  static defaultProps = {
    onAccept: () => {},
    onCancel: () => {},
    onAccept_: () => {},
    onCancel_: () => {},
  }

  static childContextTypes = {
    surfaceProps: PropTypes.object,
  }

  getChildContext() {
    return { surfaceProps: this.state.surfaceProps }
  }

  state = {
    rootProps: {
      className: {
        'mdc-dialog': true,
      },
    },

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
      notifyAccept: () => {
        this.props.onAccept()
        this.props.onAccept_()
        this.props.onClose()
      },
      notifyCancel: () => {
        this.props.onCancel()
        this.props.onCancel_()
        this.props.onClose()
      },
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
      onAccept_,
      onCancel_,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <div>
        <aside
          ref={v => (this.root_ = v)}
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

  componentWillReceiveProps(nextProps: Props) {
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

export default Dialog
