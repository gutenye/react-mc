// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSnackbarFoundation } from '@material/snackbar'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Snackbar extends React.Component {
  props: PropsT
  foundation_: any
  root_: any

  state = {
    rootProps: { className: new Set(['mdc-snackbar']) },
    actionProps: {},
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
      setActionAriaHidden: helper.setAttr('actionProps', this, 'aria-hidden', true),
      unsetActionAriaHidden: helper.rmAttr('actionProps', this, 'aria-hidden', false),
      setActionText: actionText => this.setState({ actionText }),
      setMessageText: messageText => this.setState({ messageText }),
      registerActionClickHandler: helper.registerHandler('actionProps', this, 'click'),
      deregisterActionClickHandler: helper.deregisterHandler('actionProps', this, 'click'),
      registerTransitionEndHandler: helper.registerHandler('rootProps', this, 'transitionend'),
      deregisterTransitionEndHandler: helper.deregisterHandler('rootProps', this, 'transitionend'),
    })
  }

  render() {
    const { children, className, ...rest } = this.props
    const { rootProps, actionProps, messageText, actionText } = this.state
    const rootClassName = cx(Array.from(rootProps.className), className)
    return (
      <div
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
            type="button"
            className="mdc-button mdc-snackbar__action-button"
            {...actionProps}
          >
            {actionText}
          </button>
        </div>
      </div>
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
