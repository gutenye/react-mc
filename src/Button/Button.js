// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'

class Button extends React.Component {
  props: {
    dense: boolean,
    raised: boolean,
    compact: boolean,
    primary: boolean,
    accent: boolean,
    className?: string,
    children: any,
  }
  ripple_: any

  state = {
    rootProps: { className: new Set() },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
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
    const rootClassName = cx(
      'mdc-button',
      {
        'mdc-button--dense': dense,
        'mdc-button--raised': raised,
        'mdc-button--compact': compact,
        'mdc-button--primary': primary,
        'mdc-button--accent': accent,
      },
      Array.from(rootProps.className),
      className
    )
    return (
      <button {...rootProps} className={rootClassName} {...rest}>
        {children}
      </button>
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
