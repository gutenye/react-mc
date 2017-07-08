// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { MDCSimpleMenuFoundation } from '@material/menu'
import { getTransformPropertyName } from '@material/menu/util'
import * as helper from '../../helper'
import type { PropsT } from '../../types'

class Menu extends React.Component {
  static Items: any
  static Item: any

  props: {
    open: boolean,
    onClose: Function,
    /** alias to onClose */
    onCancel: Function,
    onSelected: Function,
    openFrom?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  } & PropsT
  foundation_: any
  root_: any
  itemsContainer_: any
  items: Array

  static defaultProps = {
    onCancel: () => {},
    onSelected: () => {},
  }

  state = {
    rootProps: { className: new Set(['mdc-simple-menu']) },
  }

  getDefaultFoundation() {
    this.root_ = ReactDOM.findDOMNode(this)
    this.itemsContainer_ = this.root_.querySelector(
      MDCSimpleMenuFoundation.strings.ITEMS_SELECTOR
    )
    this.items = [].slice.call(
      this.itemsContainer_.querySelectorAll('.mdc-list-item[role]')
    )
    // prettier-ignore
    return new MDCSimpleMenuFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      hasClass: helper.hasClass('rootProps', this),
      hasNecessaryDom: () => Boolean(this.itemsContainer_),
      getAttributeForEventTarget: (target, attributeName) => target.getAttribute(attributeName),
      getInnerDimensions: () => {
        const {itemsContainer_: itemsContainer} = this;
        return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight};
      },
      hasAnchor: () => this.root_.parentElement && this.root_.parentElement.classList.contains('mdc-menu-anchor'),
      getAnchorDimensions: () => this.root_.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return {width: window.innerWidth, height: window.innerHeight};
      },
      setScale: (x, y) => {
        this.root_.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`;
      },
      setInnerScale: (x, y) => {
        this.itemsContainer_.style[getTransformPropertyName(window)] = `scale(${x}, ${y})`;
      },
      getNumberOfItems: () => this.items.length,
      registerInteractionHandler: helper.registerInteractionHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterInteractionHandler('rootProps', this),
      registerBodyClickHandler: (handler) => document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) => document.body.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items[index];
        return {top, height};
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items[index].style.setProperty('transition-delay', value),
      getIndexForEventTarget: (target) => this.items.indexOf(target),
      notifySelected: (evtData) => this.props.onSelected({index: evtData.index, item: this.items[evtData.index]}),
      notifyCancel: this.onCancel,
      saveFocus: () => {
        this.previousFocus_ = document.activeElement;
      },
      restoreFocus: () => {
        if (this.previousFocus_) {
          this.previousFocus_.focus();
        }
      },
      isFocused: () => document.activeElement === this.root_,
      focus: () => this.root_.focus(),
      getFocusedItemIndex: () => this.items.indexOf(document.activeElement),
      focusItemAtIndex: (index) => this.items[index].focus(),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        this.root_.style[`${getTransformPropertyName(window)}-origin`] = origin;
      },
      setPosition: (position) => {
        this.root_.style.left = 'left' in position ? position.left : null;
        this.root_.style.right = 'right' in position ? position.right : null;
        this.root_.style.top = 'top' in position ? position.top : null;
        this.root_.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      getAccurateTime: () => window.performance.now(),
    })
  }

  render() {
    const {
      openFrom,
      onClose,
      onSelected,
      onCancel,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(
      {
        [`mdc-simple-menu--open-from-${openFrom}`]: 'openFrom',
      },
      Array.from(rootProps.className),
      className
    )
    return (
      <div tabIndex="-1" {...rootProps} className={rootClassName} {...rest}>
        {children}
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()

    if (this.props.open) {
      this.foundation_.open()
    }
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (
      nextProps.open !== this.props.open &&
      nextProps.open !== this.foundation_.isOpen()
    ) {
      if (nextProps.open) this.foundation_.open()
      else this.foundation_.close()
    }
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  onCancel = () => {
    this.props.onClose()
    this.props.onCancel()
  }
}

export default Menu
