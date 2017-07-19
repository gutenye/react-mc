// @flow
import React from 'react'
import cx from 'classnames'
import { MDCSimpleMenuFoundation, util } from '@material/menu/dist/mdc.menu'
import * as helper from '../../helper'
import type { PropsT } from '../../types'

class Menu extends React.Component {
  static displayName = 'Menu.Simple'
  props: {
    /** items: [{text, disabled, ...props}]  */
    items: Array<*>,
    /** open=true or open=selectedIndex */
    open: boolean | number,
    /** alias to onCancel */
    onClose: Function,
    onCancel: Function,
    /** onSelect({index, item}) */
    onSelected: Function,
    /** alias to onSelected */
    onChange: Function,
    openFrom?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  } & PropsT
  foundation_: any
  root_: any
  itemsContainer_: any
  previousFocus_: any
  items_: Array<*>

  static defaultProps = {
    onCancel: () => {},
    onClose: () => {},
    onSelected: () => {},
  }

  state = {
    rootProps: {
      className: {
        'mdc-simple-menu': true,
        [`mdc-simple-menu--open-from-${this.props.openFrom}`]: 'openFrom',
      },
    },
  }

  getDefaultFoundation() {
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
        this.root_.style[util.getTransformPropertyName(window)] = `scale(${x}, ${y})`;
      },
      setInnerScale: (x, y) => {
        this.itemsContainer_.style[util.getTransformPropertyName(window)] = `scale(${x}, ${y})`;
      },
      getNumberOfItems: () => this.items_.length,
      registerInteractionHandler: helper.registerHandler('rootProps', this),
      deregisterInteractionHandler: helper.deregisterHandler('rootProps', this),
      registerBodyClickHandler: (handler) => document.body.addEventListener('click', handler),
      deregisterBodyClickHandler: (handler) => document.body.removeEventListener('click', handler),
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items_[index].el;
        return {top, height};
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items_[index].el.style.setProperty('transition-delay', value),
      getIndexForEventTarget: (target) => this.items_.map(v => v.el).indexOf(target),
      notifySelected: this.onSelected,
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
      getFocusedItemIndex: () => this.items_.map(v => v.el).indexOf(document.activeElement),
      focusItemAtIndex: (index) => this.items_[index].el.focus(),
      isRtl: () => getComputedStyle(this.root_).getPropertyValue('direction') === 'rtl',
      setTransformOrigin: (origin) => {
        this.root_.style[`${util.getTransformPropertyName(window)}-origin`] = origin;
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
      items,
      open,
      openFrom,
      onClose,
      onSelected,
      onCancel,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    // don't mirror items, as Select needs the el
    this.items_ = items
    // this.items_ = [...items]
    return (
      <div
        ref={v => (this.root_ = v)}
        tabIndex="-1"
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        <ul
          ref={v => (this.itemsContainer_ = v)}
          className="mdc-simple-menu__items mdc-list"
          role="menu"
          aria-hidden="true"
        >
          {this.items_.map((item, i) => {
            if (item.divider)
              return (
                <li
                  key={i}
                  ref={v => (item.el = v)}
                  className="mdc-list-divider"
                  role="seperator"
                />
              )
            const { text, disabled, el, ...rest } = item
            const disabledProps = disabled
              ? { tabIndex: -1, 'aria-disabled': true }
              : { tabIndex: 0 }
            return (
              <li
                key={text}
                ref={v => (item.el = v)}
                className="mdc-list-item"
                role="menuitem"
                {...disabledProps}
                {...rest}
              >
                {text}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()

    if (this.props.open) {
      this.open_(this.props)
    }
  }

  componentWillReceiveProps(nextProps: PropsT) {
    if (
      nextProps.open !== this.props.open &&
      nextProps.open !== this.foundation_.isOpen()
    ) {
      if (nextProps.open === false) this.foundation_.close()
      else this.open_(nextProps)
    }
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }

  open_(props: PropsT) {
    if (typeof props.open === 'number') {
      this.foundation_.open({ focusIndex: props.open })
    } else {
      this.foundation_.open()
    }
  }

  onSelected = (evtData: any) => {
    const detail = {
      index: evtData.index,
      item: this.props.items[evtData.index],
    }
    this.props.onSelected({ detail })
    this.props.onChange({ detail })
  }

  onCancel = () => {
    this.props.onCancel()
    this.props.onClose()
  }
}

export default Menu
