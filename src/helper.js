import { add, remove } from './utils'

// state = {
//   rootClassName: []
// }
export function addClass(stateName, self) {
  return function(className) {
    self.setState({
      [stateName]: add(self.state[stateName], className)
    })
  }
}

export function removeClass(stateName, self) {
  return function(className) {
    self.setState({
      [stateName]: remove(self.state[stateName], className)
    })
  }
}

export function hasClass(ref, self) {
  return function(className) {
    if (self.refs[ref]) {
      self.refs[ref].classList.contains(className)
    }
  }
}


// state = {
//   inputAttr: {}
// }
export function setAttr(stateName, self) {
  return function(name, value) {
    self.setState({
      [stateName]: {...self.state[stateName], [name]: value}
    })
  }
}

export function removeAttr(stateName, self) {
  return function(name) {
    delete self.state[stateName][name]
    self.setState({
      [stateName]: self.state[stateName]
    })
  }
}

export function setAttrWithValue(stateName, self, name, value) {
  return function() {
    self.setState({
      [stateName]: {...self.state[stateName], [name]: value}
    })
  }
}

export function removeAttrWithValue(stateName, self, name) {
  return function() {
    delete self.state[stateName][name]
    self.setState({
      [stateName]: self.state[stateName]
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

export function registerInteractionHandler(ref, self) {
  return function(type, handler) {
    if (self.refs[ref]) {
      self.refs[ref].addEventListener(type, handler)
    }
  }
}

export function deregisterInteractionHandler(ref, self) {
  return function(type, handler) {
    if (self.refs[ref]) {
      self.refs[ref].removeEventListener(type, handler)
    }
  }
}

export function registerDocumentHandler(type) {
  return function(handler) {
    document.addEventListener(type, handler)
  }
}

export function deregisterDocumentHandler(type) {
  return function(handler) {
    document.removeEventListener(type, handler)
  }
}

export function focus(ref, self) {
  return function() {
    if (self.refs[ref]) {
      self.refs[ref].focus()
    }
  }
}
