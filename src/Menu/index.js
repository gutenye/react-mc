import '@material/menu/dist/mdc.menu.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import { MDCSimpleMenuFoundation } from '@material/menu'
import * as helper from '../helper'

class Menu extends Component {
  static propTypes = {
    items: PropTypes.array,
  }

  foundation = new MDCSimpleMenuFoundation({
    addClass: helper.addClass(this),
    removeClass: helper.removeClass(this),
    hasClass: helper.hasClass(this),
    hasNecessaryDom: () => Bool(this.refs.items),
    getInnerDimensions: () => ({width: this.refs.items.offsetWidth, height: this.refs.items.offsetHeight}),
    hasAnchor: () => this.refs.root.parentElement && this.refs.root.parentElement.classList.contains('mdc-menu-anchor'),
    getAnchorDimensions: () => this.refs.root.parentElement.getBoundingClientRect(),
    getWindowDimensions: () => ({width: window.innerWidth, height: window.innerHeight}),
    setScale: (x, y) => this.refs.root.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`,
    setInnerScale: (x, y) => this.refs.items.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`,
    getNumberOfItems: () => this.props.items.length,
    registerInteractionHandler: helper.registerInteractionHandler(this),
    deregisterInteractionHandler: helper.deregisterInteractionHandler(this),
    registerDocumentClickHandler: helper.registerDocumentHandler('click', this),
    deregisterDocumentClickHandler: helper.deregisterDocumentHandler('click', this),
    getYParamsForItemAtIndex: (index) =>  {
      const {offsetTop: top, offsetHeight: height} = this.items[index]
      return {top, height}
    },
    setTransitionDelayForItemAtIndex: (index, value) => this.items[index].style.setProperty('transition-delay', value),

    /*
    getIndexForEventTarget(target: EventTarget) => number	Checks to see if the target of an event pertains to one of the menu items, and if so returns the index of that item. Returns -1 if the target is not one of the menu items. The same notice for index applies here as above.
    notifySelected(evtData: {index: number}) => void	Dispatches an event notifying listeners that a menu item has been selected. The function should accept an evtData parameter containing the an object with an index property representing the index of the selected item. Implementations may choose to supplement this data with additional data, such as the item itself.
    notifyCancel() => void	Dispatches an event notifying listeners that the menu has been closed with no selection made.
    saveFocus() => void	Stores the currently focused element on the document, for restoring with restoreFocus.
    restoreFocus() => void	Restores the previously saved focus state, by making the previously focused element the active focus again.
    isFocused() => boolean	Returns a boolean value indicating whether the root element of the simple menu is focused.
    focus() => void	Focuses the root element of the simple menu.
    getFocusedItemIndex() => number	Returns the index of the currently focused menu item (-1 if none).
    focusItemAtIndex(index: number) => void	Focuses the menu item with the provided index.
    isRtl() => boolean	Returns boolean indicating whether the current environment is RTL.
    setTransformOrigin(value: string) => void	Sets the transform origin for the menu element.
    setPosition(position: { top: string, right: string, bottom: string, left: string }) => void	Sets the position of the menu element.
    */
  })

  render() {
    const {children, className, ...rest} = this.props
    const rootClassName = cx('mdc-simple-menu', className)
    return (
      <div tabIndex='-1' className={rootClassName} {...rest}>
        <ul ref='items' className='mdc-simple-menu__items mdc-list' role='menu' aria-hidden='true'>
          <li class='mdc-list-item' role='menuitem' tabindex='0'>
            A Menu Item
          </li>
          <li class='mdc-list-item' role='menuitem' tabindex='0'>
            Another Menu Item
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
