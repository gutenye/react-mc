// @flow
import React from 'react'
import cx from 'classnames'
import createRippleFoundation from '../Ripple'

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
  rippleFoundation_: any

  state = {
    rootProps: { className: new Set() },
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
    this.rippleFoundation_ = createRippleFoundation(this)
    this.rippleFoundation_.init()
  }

  componentWillUnmount() {
    this.rippleFoundation_.destroy()
  }
}

export default Button
