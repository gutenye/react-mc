// @flow
import React from 'react'
import cx from 'classnames'
import {
  MDCTabBarFoundation,
  MDCTabFoundation,
} from '@material/tabs/dist/mdc.tabs'
import Tab from './Tab'
import * as helper from '../helper'
import type { PropsC } from '../types'

class TabBar extends React.Component {
  props: {
    /** items = [ {text, icon: <i className='mdc-tab__icon material-icons'>phone<i> }] */
    items: Array<*>,
    indicator?: 'primary' | 'accent',
    theme?: 'dark',
    onChange?: Function,
    onChange_?: Function,
  } & PropsC

  static defaultProps = {
    component: 'nav',
    onChange: () => {},
    onChange_: () => {},
  }
  static displayName = 'Tabs'
  static Icon: any
  static IconText: any
  static Indicator: any
  static Tab: any
  foundation_: any
  root_: any
  indicator_: any
  tabSelectedHandler_: any
  tabs: Array<*> = []

  state = {
    rootProps: {
      className: {
        'mdc-tab-bar': true,
        'mdc-tab-bar--icons-with-text':
          this.props.items[0].text && this.props.items[0].icon,
        'mdc-tab-bar--icon-tab-bar':
          this.props.items[0].icon && !this.props.items[0].text,
        [`mdc-tab-bar--indicator-${this.props.indicator}`]: this.props
          .indicator,
        [`mdc-tab-bar--theme-${this.props.theme}`]: this.props.theme,
      },
    },
    tabProps: {},
  }

  getDefaultFoundation() {
    this.tabSelectedHandler_ = ({ detail }) => {
      const { tab } = detail
      const indexOfTab = this.tabs.indexOf(tab)
      if (indexOfTab < 0) {
        throw new Error(
          "Invalid tab component given as activeTab: Tab not found within this component's tab list"
        )
      }
      this.foundation_.switchToTabAtIndex(indexOfTab, true)
    }

    // prettier-ignore
    return new MDCTabBarFoundation({
      addClass: helper.addClass('rootProps', this),
      removeClass: helper.removeClass('rootProps', this),
      bindOnMDCTabSelectedEvent: helper.registerHandler('tabProps', this,  MDCTabFoundation.strings.SELECTED_EVENT, this.tabSelectedHandler_),
      unbindOnMDCTabSelectedEvent: helper.deregisterHandler('tabProps', this, MDCTabFoundation.strings.SELECTED_EVENT),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getOffsetWidth: () => this.root_.offsetWidth,
      setStyleForIndicator: (propertyName, value) => this.indicator_.style.setProperty(propertyName, value),
      getOffsetWidthForIndicator: () => this.indicator_.offsetWidth,
      notifyChange: (evtData) => {
        this.props.onChange_({detail: evtData})
        this.props.onChange(evtData)
      },
      getNumberOfTabs: () => this.tabs.length,
      isTabActiveAtIndex: (index) => this.tabs[index].isActive,
      setTabActiveAtIndex: (index, isActive) => {
        this.tabs[index].isActive = isActive
      },
      isDefaultPreventedOnClickForTabAtIndex: (index) => this.tabs[index].preventDefaultOnClick,
      setPreventDefaultOnClickForTabAtIndex: (index, preventDefaultOnClick) => {
        this.tabs[index].preventDefaultOnClick = preventDefaultOnClick;
      },
      measureTabAtIndex: (index) => this.tabs[index].measureSelf(),
      getComputedWidthForTabAtIndex: (index) => this.tabs[index].computedWidth,
      getComputedLeftForTabAtIndex: (index) => this.tabs[index].computedLeft,
    })
  }

  render() {
    const {
      component: Component,
      items,
      indicator,
      theme,
      onChange,
      onChange_,
      className,
      ...rest
    } = this.props
    const { rootProps, tabProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {items.map((tab, i) => {
          const { text, icon, ...rest } = tab
          return (
            <Tab ref={v => (this.tabs[i] = v)} key={i} {...tabProps} {...rest}>
              {icon}
              <span className="mdc-tab__icon-text">
                {text}
              </span>
            </Tab>
          )
        })}
        <span
          ref={v => (this.indicator_ = v)}
          className="mdc-tab-bar__indicator"
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
}

export default TabBar
