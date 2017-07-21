// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'

class Button extends React.Component {
  props: {
    component?: string,
    dense: boolean,
    raised: boolean,
    compact: boolean,
    primary: boolean,
    accent: boolean,
    className?: string,
    children: any,
  }
  ripple_: any

  static defaultProps = {
    component: 'button',
  }

  state = {
    rootProps: {
      className: {
        'mdc-button': true,
        'mdc-button--dense': this.props.dense,
        'mdc-button--raised': this.props.raised,
        'mdc-button--compact': this.props.compact,
        'mdc-button--primary': this.props.primary,
        'mdc-button--accent': this.props.accent,
      },
    },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
      component,
      dense,
      raised,
      compact,
      primary,
      accent,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return React.createElement(
      component,
      { ...rootProps, className: rootClassName, ...rest },
      children
    )
  }

  componentDidMount() {
    this.ripple_ = this.initRipple_()
    this.ripple_.init()
  }

  componentWillUnmount() {
    this.ripple_.destroy()
  }
}

export default Button