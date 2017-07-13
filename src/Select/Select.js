// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSelectFoundation } from '@material/select/dist/mdc.select'
import Menu from '../Menu'
import * as helper from '../helper'
import type { PropsT } from '../types'

class Select extends React.Component {
  props: {
    selctedText: string,
    disabled: boolean,
    onChange: Function,
  } & PropsT
  foundation_: any
  root_: any
  menuEl_: any

  state = {
    rootProps: { className: new Set(['mdc-select']), tabIndex: 0 },
    menuProps: {},
    selectedText: this.props.selectedText,
    items: this.props.items,
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
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterHandler('rootProps', this),
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
      openMenu: this.openMenu,
      isMenuOpen: () => this.state.menuOpen,
      setSelectedTextContent: (selectedText) => this.setState({selectedText}),
      getNumberOfOptions: () => this.state.items.length,
      getTextForOptionAtIndex: index => this.state.items[index].text,
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
      notifyChange: this.onChange,
      getWindowInnerHeight: () => window.innerHeight,
    })
  }

  render() {
    const { disabled, className, children, ...rest } = this.props
    delete rest.items
    delete rest.selectedText
    const { selectedText, items, rootProps, menuOpen, menuProps } = this.state
    const rootClassName = cx(
      Array.from(rootProps.className),
      {
        'mdc-select--disabled': disabled,
      },
      className
    )
    return (
      <div
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
        <Menu.Simple
          {...menuProps}
          open={menuOpen}
          onClose={this.onMenuClose}
          className="mdc-select__menu"
          items={items}
        />
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

  onMenuClose = () => {
    this.setState({ menuOpen: false })
  }

  openMenu = (focusIndex: boolean) => {
    this.setState({ menuOpen: focusIndex })
  }

  onChange = () => {
    const detail = {
      value: this.foundation_.getValue(),
      selectedIndex: this.foundation_.getSelectedIndex(),
      selectedOptions: this.root_.querySelectorAll('[aria-selected]'),
    }
    this.props.onChange({ detail })
  }
}

export default Select
