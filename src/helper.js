import ReactDOM from 'react-dom'
import EVENT_MAP from './EVENT_MAP'

// addClass('rootProps', this) with state = {rootProps: {className: new Set()}}
// addClass(document.body)
export function addClass(propsName, self) {
  if (typeof propsName === 'string') {
    return function(className) {
      self.setState(state => {
        state[propsName].className.add(className)
        return { [propsName]: state[propsName] }
      })
    }
  } else {
    return function(className) {
      propsName.classList.add(className)
    }
  }
}

export function removeClass(propsName, self) {
  if (typeof propsName === 'string') {
    return function(className) {
      self.setState(state => {
        state[propsName].className.delete(className)
        return { [propsName]: state[propsName] }
      })
    }
  } else {
    return function(className) {
      propsName.classList.remove(className)
    }
  }
}

export function hasClass(propsName, self) {
  return function(className) {
    return self.state[propsName].className.has(className)
  }
}

// registerHandler('rootProps', this, 'click')
// registerHandler(document, 'click')
export function registerHandler(propsName, self, type) {
  if (typeof propsName === 'string') {
    return function(handler) {
      registerInteractionHandler(propsName, self)(type, handler)
    }
  } else {
    return function(handler) {
      propsName.addEventListener(self, handler)
    }
  }
}

export function deregisterHandler(propsName, self, type) {
  if (typeof propsName === 'string') {
    return function(handler) {
      deregisterInteractionHandler(propsName, self)(type, handler)
    }
  } else {
    return function(handler) {
      propsName.removeEventListener(self, handler)
    }
  }
}

// state = { rootProps: {} }
export function registerInteractionHandler(propsName, self) {
  return function(type, handler) {
    // convert `click` to `onClick`
    const reactType = EVENT_MAP[type]
    if (reactType) {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [reactType]: handler },
      }))
    } else {
      // for events not supported on React, e.g. pointerdown
      ReactDOM.findDOMNode(self).addEventListener(type, handler)
    }
  }
}

export function deregisterInteractionHandler(propsName, self) {
  return function(type, handler) {
    const reactType = EVENT_MAP[type]
    if (reactType) {
      self.setState(state => {
        delete state[propsName][reactType]
        return { [propsName]: state[propsName] }
      })
    } else {
      ReactDOM.findDOMNode(self).removeEventListener(type, handler)
    }
  }
}

// setAttr('rootProps', this) with state = {rootProps: {}}
export function setAttr(propsName, self) {
  return function(name, value) {
    self.setState(state => ({
      [propsName]: { ...state[propsName], [name]: value },
    }))
  }
}

export function removeAttr(propsName, self) {
  return function(name) {
    self.setState(state => {
      delete state[propsName][name]
      return { [propsName]: state[propsName] }
    })
  }
}

export function setAttrWithValue(propsName, self, name, value) {
  return function() {
    setAttr(propsName, self)(name, value)
  }
}

export function removeAttrWithValue(propsName, self, name) {
  return function() {
    removeAttr(propsName, self)(name)
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

export function focus(ref, self) {
  return function() {
    self.refs[ref].focus()
  }
}

export function setStyle(ref, self) {
  return function(propertyName, value) {
    self.refs[ref].style[propertyName] = value
  }
}

export function eventTargetHasClass() {
  return function(target, className) {
    return target.classList.contains(className)
  }
}

export function isElement(selector, self) {
  return function(el) {
    return ReactDOM.findDOMNode(self).querySelector(selector) === el
  }
}
