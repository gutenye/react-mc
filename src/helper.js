import ReactDOM from 'react-dom'
import EVENT_MAP from './EVENT_MAP'

// addClass('rootProps', this) with state = {rootProps: {className: {'mdc-hello': true}}}
// addClass(document.body)
export function addClass(propsName, self) {
  if (typeof propsName === 'string') {
    return function(className) {
      self.setState(state => {
        state[propsName].className[className] = true
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
        state[propsName].className[className] = false
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
    return self.state[propsName].className[className]
  }
}

// getAttr('rootProps', this) with state = {rootProps: {}}
// getAttr('rootProps', this, name)
export function getAttr(propsName, self, name) {
  if (name) {
    return function() {
      return self.state[propsName][name]
    }
  } else {
    return function(name) {
      return self.state[propsName][name]
    }
  }
}

// setAttr('rootProps', this)
// setAttr('rootProps', this, 'tabIndex')
// setAttr('rootProps', this, 'tabIndex', 0)
export function setAttr(propsName, self, name, value) {
  if (value) {
    return function() {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [name]: value },
      }))
    }
  } else if (name) {
    return function(value) {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [name]: value },
      }))
    }
  } else {
    return function(name, value) {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [name]: value },
      }))
    }
  }
}

export function rmAttr(propsName, self, name) {
  if (name) {
    return function() {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [name]: null },
      }))
    }
  } else {
    return function(name) {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [name]: null },
      }))
    }
  }
}

// registerHandler('rootProps', this) with state = { rootProps: {} }
// registerHandler('rootProps', this, 'click')
// registerHandler('rootProps', this, 'selected', handler)
// registerHandler(document, 'click')
// registerHandler(document)
export function registerHandler(propsName, self, type, handler) {
  if (typeof propsName === 'string') {
    if (handler) {
      // ('rootProps', this, 'selected', handler)
      return function() {
        registerHandler_(propsName, self)(type, handler)
      }
    } else if (type) {
      // ('rootProps', this, 'click')
      return function(handler) {
        registerHandler_(propsName, self)(type, handler)
      }
    } else {
      // ('rootProps', this)
      return function(type, handler) {
        registerHandler_(propsName, self)(type, handler)
      }
    }
  } else {
    if (self) {
      // (document, 'click')
      return function(handler) {
        propsName.addEventListener(self, handler)
      }
    } else {
      // (document)
      return function(type, handler) {
        propsName.addEventListener(type, handler)
      }
    }
  }
}

export function deregisterHandler(propsName, self, type) {
  if (typeof propsName === 'string') {
    if (type) {
      return function(handler) {
        deregisterHandler_(propsName, self)(type, handler)
      }
    } else {
      return function(type, handler) {
        deregisterHandler_(propsName, self)(type, handler)
      }
    }
  } else {
    if (self) {
      return function(handler) {
        propsName.removeEventListener(self, handler)
      }
    } else {
      return function(type, handler) {
        propsName.removeEventListener(type, handler)
      }
    }
  }
}

function registerHandler_(propsName, self) {
  return function(type, handler) {
    // `click` to `onClick`
    let reactType = EVENT_MAP[type]
    // 'MDCSimpleMenu:selected' => 'onSelected_'
    if (type.match(/:/)) {
      const part = type.split(/:/)[1]
      reactType = `on${part[0].toUpperCase()}${part.slice(1, part.length)}_`
    }
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

function deregisterHandler_(propsName, self) {
  return function(type, handler) {
    const reactType = EVENT_MAP[type]
    if (reactType) {
      self.setState(state => ({
        [propsName]: { ...state[propsName], [reactType]: null },
      }))
    } else {
      ReactDOM.findDOMNode(self).removeEventListener(type, handler)
    }
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
