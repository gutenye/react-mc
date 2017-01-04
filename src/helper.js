
// import { Set } from 'immutable'
//
// state = {
//  classes: new Set()
// }
//
export function addClass(stateName, self) {
  return function(className) {
    self.setState({
      [stateName]: self.state[stateName].add(className)
    })
  }
}

export function removeClass(stateName, self) {
  return function(className) {
    self.setState({
      [stateName]: self.state[stateName].remove(className)
    })
  }
}

// state = {
//   inputAttr: new Map()
// }
export function setAttr(stateName, self) {
  return function(name, value) {
    self.setState({
      [stateName]: self.state[stateName].set(name, value)
    })
  }
}

export function removeAttr(stateName, self) {
  return function(name ) {
    self.setTate({
      [stateName]: self.state[stateName].remove(name)
    })
  }
}

export function getNative(ref, self) {
  return function() {
    if (!self.refs[ref]) {
      throw new Error('Invalid state for operation')
    }
    return self.refs[ref]
  }
}

export function isAttachedToDOM(ref, self) {
  return function() {
    return Boolean(self.refs[ref])
  }
}

export function registerHandler(ref, eventName, self) {
  return function(handler) {
    if (self.refs[ref]) {
      self.refs[ref].addEventListener(eventName, handler)
    }
  }
}

export function deregisterHandler(ref, eventName, self) {
  return function(handler) {
    if (self.refs[ref]) {
      self.refs[ref].removeEventListener(eventName, handler)
    }
  }
}
