import '@material/snackbar/dist/mdc.snackbar.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { MDCSnackbarFoundation } from '@material/snackbar'
import * as helper from '../helper'

const {TRANS_END_EVENT_NAME} = MDCSnackbarFoundation.strings

class Snackbar extends Component {
  static propTypes = {}
  state = {
    rootClassName: [],
    ariaHidden: 'true',
    message: '',
    actionText: '',
    actionAriaHidden: 'true',
  }

  foundation = new MDCSnackbarFoundation({
    addClass: helper.addClass('rootClassName', this),
    removeClass: helper.removeClass('rootClassName', this),
    setAriaHidden: () => this.setState({ariaHidden: 'true'}),
    unsetAriaHidden: () => this.setState({ariaHidden: 'false'}),
    setMessageText: (message) => this.setState({message}),
    setActionText: (actionText) => this.setState({actionText}),
    setActionAriaHidden: () => this.setState({actionAriaHidden: 'true'}),
    unsetActionAriaHidden: () => this.setState({actionAriaHidden: 'false'}),
    registerActionClickHandler: helper.registerHandler('el', 'click', this),
    deregisterActionClickHandler: helper.deregisterHandler('el', 'click', this),
    registerTransitionEndHandler: helper.registerHandler('root', TRANS_END_EVENT_NAME, this),
    deregisterTransitionEndHandler: helper.deregisterHandler('root', TRANS_END_EVENT_NAME, this),
  })

  render() {
    const {children, className, ...rest} = this.props
    const {ariaHidden, message, actionText, actionAriaHidden} = this.state
    const rootClassName = cx('mdc-snackbar', this.state.rootClassName, className)
    return (
      <div ref='root' aria-live='assertive' aria-atomic aria-hidden={ariaHidden} className={rootClassName} {...rest}>
        <div className='mdc-snackbar__text'>{message}</div>
        <div className='mdc-snackbar__action-wrapper'>
          <button ref='el' type='button' className='mdc-button mdc-snackbar__action-button' aria-hidden={actionAriaHidden}>{actionText}</button>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    this.foundation.init()
  }

  componentWillUnmount() {
    this.foundation.destroy()
  }

  show(options) {
    this.foundation.show(options)
  }
}

export default Snackbar
