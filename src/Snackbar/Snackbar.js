// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSnackbarFoundation } from '@material/snackbar/dist/mdc.snackbar'
import * as helper from '../helper'
import type { PropsC } from '../types'

class Snackbar extends React.Component {
  props: {
    align?: 'start',
  } & PropsC

  static defaultProps = {
    component: 'div',
  }
  foundation_: any
  root_: any
  actionButton_: any

  state = {
    rootProps: {
      className: {
        'mdc-snackbar': true,
        [`mdc-snackbar--align-${this.props.align}`]: this.props.align,
      },
    },
    actionButtonProps: {},
    actionText: '',
    messageText: '',
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCSnackbarFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      setAriaHidden: helper.setAttr('rootProps', this, 'aria-hidden', true),
      unsetAriaHidden: helper.rmAttr('rootProps', this, 'aria-hidden', false),
      setActionAriaHidden: helper.setAttr('actionButtonProps', this, 'aria-hidden', true),
      unsetActionAriaHidden: helper.rmAttr('actionButtonProps', this, 'aria-hidden', false),
      setActionText: actionText => this.setState({ actionText }),
      setMessageText: messageText => this.setState({ messageText }),
      setFocus: () => this.actionButton_.focus(),
      visibilityIsHidden: () => document.hidden,
      registerCapturedBlurHandler: helper.registerHandler('actionButtonProps', this, 'blur'),
      deregisterCapturedBlurHandler: helper.deregisterHandler('actionButtonProps', this, 'blur'),
      registerVisibilityChangeHandler: (handler) => document.addEventListener('visibilitychange', handler),
      deregisterVisibilityChangeHandler: (handler) => document.removeEventListener('visibilitychange', handler),
      registerCapturedInteractionHandler: (evt, handler) =>
        document.body.addEventListener(evt, handler, true),
      deregisterCapturedInteractionHandler: (evt, handler) =>
        document.body.removeEventListener(evt, handler, true),
      registerActionClickHandler: helper.registerHandler('actionButtonProps', this, 'click'),
      deregisterActionClickHandler: helper.deregisterHandler('actionButtonProps', this, 'click'),
      registerTransitionEndHandler: helper.registerHandler('rootProps', this, 'transitionend'),
      deregisterTransitionEndHandler: helper.deregisterHandler('rootProps', this, 'transitionend'),
    })
  }

  render() {
    const {
      component: Component,
      align,
      children,
      className,
      ...rest
    } = this.props
    const { rootProps, actionButtonProps, messageText, actionText } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        aria-live="assertive"
        aria-atomic="true"
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        <div className="mdc-snackbar__text">
          {messageText}
        </div>
        <div className="mdc-snackbar__action-wrapper">
          <button
            ref={v => (this.actionButton_ = v)}
            type="button"
            className="mdc-button mdc-snackbar__action-button"
            {...actionButtonProps}
          >
            {actionText}
          </button>
        </div>
      </Component>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  show(options: any) {
    const { message, ...rest } = options
    this.foundation_.show({
      message: message.toString(),
      ...rest,
    })
  }
}

export default Snackbar
