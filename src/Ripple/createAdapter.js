import ReactDOM from 'react-dom'
import { util } from '@material/ripple/dist/mdc.ripple'
import * as helper from '../helper'

const { applyPassive, supportsCssVariables, getMatchesProperty } = util

/*
 * import { MDCRippleFoundation} from '@material/ripple/dist/mdc.ripple'
 * import Ripple from '../Ripple'
 *
 * class Button extends React.Component {
 *   state = {
 *     rootProps: { className: {} }}
 *   }
 * 
 *   initRipple_() {
 *     const adapter = Object.assign(Ripple.createAdapter(this), {..}
 *     return new MDCRippleFoundation(adapter)
 *   }
 * 
 *   componentDidMount() {
 *     this.ripple_ = this.initRipple_()
 *     this.ripple_.init()
 *   }
 * 
 *   componentWillUnMount() {
 *     this.ripple_.destroy()
 *   }
 */

export default function createAdapter(self, options = {}) {
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
