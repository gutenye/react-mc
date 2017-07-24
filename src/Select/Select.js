// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSelectFoundation } from '@material/select/dist/mdc.select'
import Menu from '../Menu'
import * as helper from '../helper'
import type { PropsC } from '../types'

class Select extends React.Component {
  props: {
    /** items = [ { text, value, disabled? } ]*/
    items: Array<*>,
    value: string,
    onChange: Function,
    placeholder?: string,
    disabled?: boolean,
    /** private */
    onChange_?: Function,
  } & PropsC

  static defaultProps = {
    component: 'div',
    onChange_: () => {},
  }

  foundation_: any
  root_: any
  menuEl_: any

  state = {
    rootProps: {
      className: {
        'mdc-select': true,
        'mdc-select--disabled': this.props.disabled,
      },
      tabIndex: 0,
    },

    menuProps: {},
    selectedText: this.getSelectedText(),
    items: this.getItems(),
    menuOpen: false,
  }

  getDefaultFoundation() {
    this.menuEl_ = this.root_.querySelector('.mdc-select__menu')
    // prettier-ignore
    return new MDCSelectFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      setAttr: helper.setAttr('rootProps', this),
      rmAttr: helper.rmAttr('rootProps', this),
      computeBoundingRect: () => this.root_.getBoundingClientRect(),
      // Don't use rootProps here for Event bubbling
      registerInteractionHandler: (type, handler) => this.root_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.root_.removeEventListener(type, handler),
      focus: () => this.root_.focus(),
      makeTabbable: helper.setAttr('rootProps', this, 'tabIndex', 0),
      makeUntabbable: helper.setAttr('rootProps', this, 'tabIndex', -1),
      getComputedStyleValue: propertyName => window.getComputedStyle(this.root_).getPropertyValue(propertyName),
      setStyle: (propertyName, value) => this.root_.style.setProperty(propertyName, value),
      create2dRenderingContext: () => document.createElement('canvas').getContext('2d'),
      setMenuElStyle: (propertyName, value) => this.menuEl_.style.setProperty(propertyName, value),
      setMenuElAttr: helper.setAttr('menuProps', this),
      rmMenuElAttr: helper.rmAttr('menuProps', this),
      getMenuElOffsetHeight: () => this.menuEl_.offsetHeight,
      openMenu: (focusIndex) => this.setState({ menuOpen: focusIndex }),
      isMenuOpen: () => this.state.menuOpen !== false,
      setSelectedTextContent: (selectedText) => {
        this.setState({selectedText})
      },
      getNumberOfOptions: () => this.state.items.length,
      getTextForOptionAtIndex: index => this.state.items[index].text,
      getValueForOptionAtIndex: (index) => this.state.items[index].value,
      setAttrForOptionAtIndex: (index, attr, value) => {
        this.state.items[index][attr] = value
        this.setState({items: this.state.items})
      },
      rmAttrForOptionAtIndex: (index, attr) => {
        this.state.items[index][attr] = null
        this.setState({items: this.state.items})
      },
      getOffsetTopForOptionAtIndex: index => this.state.items[index].el.offsetTop,
      registerMenuInteractionHandler: helper.registerHandler('menuProps', this),
      deregisterMenuInteractionHandler: helper.deregisterHandler('menuProps', this),
      notifyChange: () => {
        const detail = {
          value: this.foundation_.getValue(),
          selectedIndex: this.foundation_.getSelectedIndex(),
          selectedOptions: this.root_.querySelectorAll('[aria-selected]'),
        }
        this.props.onChange({ target: { value: detail.value } })
        this.props.onChange_({ detail })
      },
      getWindowInnerHeight: () => window.innerHeight,
    })
  }

  render() {
    const {
      component: Component,
      disabled,
      onChange,
      onChange_,
      className,
      ...rest
    } = this.props
    delete rest.items
    delete rest.selectedText
    const { selectedText, items, rootProps, menuOpen, menuProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        role="listbox"
        tabIndex="0"
        {...rest}
      >
        <span className="mdc-select__selected-text">
          {selectedText}
        </span>
        {/* onSelected onCancel */}
        <Menu.Simple
          {...menuProps}
          ref={v => (this.menu_ = v)}
          className="mdc-select__menu"
          items={items}
          open={menuOpen}
          onClose={this.onMenuClose}
        />
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

  getItems() {
    const { items, placeholder } = this.props
    let result = [...items]
    if (placeholder) result.unshift({ text: placeholder, disabled: true })
    result = result.map(v => ({ role: 'option', ...v }))
    return result
  }

  getSelectedText() {
    const { placeholder, value, items } = this.props
    if (!value && placeholder) return placeholder
    const found = items.find(v => v.value === value)
    return found ? found.text : ''
  }

  onMenuClose = () => {
    this.setState({ menuOpen: false })
  }
}

export default Select
