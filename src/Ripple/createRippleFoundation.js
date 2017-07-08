import ReactDOM from 'react-dom'
import { MDCRippleFoundation } from '@material/ripple'
import {
  applyPassive,
  supportsCssVariables,
  getMatchesProperty,
} from '@material/ripple/util'
import * as helper from '../helper'

/*
 * class Button extends React.Component {
 *   state = {
 *     rootProps: { className: new Set() }}
 *   }
 * 
 *   componentDidMount() {
 *     this.rippleFoundation_ = createRippleFoundation(self, {...})
 *     this.rippleFoundation_.init()
 *   }
 * 
 *   componentWillUnMount() {
 *     this.rippleFoundation_.destroy()
 *   }
 */
export default function createRippleFoundation(self, options = {}) {
  return new MDCRippleFoundation(createAdapter(self, options))
}

function createAdapter(self, options = {}) {
  const root_ = ReactDOM.findDOMNode(self)
  const MATCHES = getMatchesProperty(HTMLElement.prototype)

  // prettier-ignore
  return {
    browserSupportsCssVars: () => supportsCssVariables(window),
    isUnbounded: () => false,
    isSurfaceActive: () => root_[MATCHES](':active'),
    isSurfaceDisabled: () => false,
    addClass: helper.addClass('rootProps', self),
    removeClass: helper.removeClass('rootProps', self),
    // React does not support passive event: https://github.com/facebook/react/issues/6436
    registerInteractionHandler: (evtType, handler) => ReactDOM.findDOMNode(self).addEventListener(evtType, handler, applyPassive()),
    deregisterInteractionHandler: (evtType, handler) => ReactDOM.findDOMNode(self).removeEventListener(evtType, handler, applyPassive()),
    registerResizeHandler: helper.registerHandler(window, 'resize'),
    deregisterResizeHandler: helper.deregisterHandler(window, 'resize'),
    updateCssVariable: (varName, value) => root_.style.setProperty(varName, value),
    computeBoundingRect: () => root_.getBoundingClientRect(),
    getWindowPageOffset: () => ({
      x: window.pageXOffset,
      y: window.pageYOffset,
    }),
    ...options
  }
}
