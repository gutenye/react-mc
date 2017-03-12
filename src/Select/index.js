import '@material/select/dist/mdc.select.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { MDCSelectFoundation } from '@material/select'
import * as helper from '../helper'
import Option from './Option'
import Menu from '../Menu'

class Select extends Component {
  static propTypes = {
    label: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    label: '',
    onChange: () => {},
  }
  state = {
    rootClassName: {},
    rootAttr: {'tabIndex': '0'},
    label: this.props.label,
  }

  foundation = new MDCSelectFoundation({
    addClass: helper.addClass('rootClassName', this),
    removeClass: helper.removeClass('rootClassName', this),
    setAttr: helper.setAttr('rootAttr', this),
    rmAttr: helper.removeAttr('rootAttr', this),
    computeBoundingRect: () => this.refs.root.getBoundingClientRect(),
    registerInteractionHandler: helper.registerInteractionHandler('root', this),
    deregisterInteractionHandler: helper.deregisterInteractionHandler('root', this),
    focus: helper.focus('root', this),
    makeTabbable: helper.setAttrWithValue('rootAttr', this, 'tabIndex', '0'),
    makeUntabbable: helper.setAttrWithValue('rootAttr', this, 'tabIndex', '-1'),
    getComputedStyleValue: (propertyName) => window.getComputedStyle(this.refs.root).getPropertyValue(propertyName),
    setStyle: (propertyName, value) => this.refs.root.style.setProperty(propertyName, value),
    create2dRenderingContext: () => document.createElement('canvas').getContext('2d'),
    setMenuElStyle: (propertyName) => this.refs.menu.style.setProperty(propertyName, value),
    setMenuElAttr: (attr, value) => this.setState({menuAttr: {...this.state.menuAttrs, [attr]: value}}),
    rmMenuElAttr: (attr) => this.setState({menuAttr: {...this.state.menuAttr, [attr]: null}}),
    getMenuElOffsetHeight: () => this.refs.menu.offsetHeight,
    openMenu: (focusIndex) => this.menu.show({focusIndex}),
    isMenuOpen: () => this.menu.open,
    setSelectedTextContent: (label) => this.setState({label}),
    getNumberOfOptions: () => this.menu.items.length,
    getTextForOptionAtIndex: (index) => this.menu.items[index].textContent,
    setAttrForOptionAtIndex: (index, attr, value) => this.menu.items[index].setAttribute(attr, value),
    rmAttrForOptionAtIndex: (index, attr) => this.menu.items[index].removeAttribute(attr),
    getOffsetTopForOptionAtIndex: (index) => this.menu.items[index].offsetTop,
    registerMenuInteractionHandler: (type, handler) => this.menu.listen(type, handler),
    deregisterMenuInteractionHandler: (type, handler) => this.menu.unlisten(type, handler),
    notifyChange: () => this.emit('MDCSelect:change', this),
    getWindowInnerHeight: () => window.innerHeight,
  })

  render() {
    const {disabled, children, className, ...rest} = this.props
    const {label} = this.state
    const rootClassName = cx('mdc-select', {
      'mdc-select--disabled': disabled,
    }, className)
    return (
      <div ref='root' role='listbox' className={rootClassName} {...rest}>
        <span className='mdc-select__selected-text'>{label}</span>
        <Menu ref='menu'>
          {children}
        </Menu>
      </div>
    )
  }

  componentDidMount() {
    this.foundation.init()
  }

  componentWillUmount() {
    this.foundation.destroy()
  }
}

Select.Option = Option

export default Select
