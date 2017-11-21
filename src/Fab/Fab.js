// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'
import type { PropsC } from '../types'

class Fab extends React.Component {
  props: {
    mini?: boolean,
    exited?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'button',
  }
  static Icon: any
  ripple_: any

  state = {
    rootProps: {
      className: {
        'mdc-fab': true,
        'mdc-fab--mini': this.props.mini,
        'mdc-fab--exited': this.props.exited,
      },
    },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
      component: Component,
      mini,
      exited,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <Component
        {...rootProps}
        className={rootClassName}
        aria-label="Favorite"
        {...rest}
      >
        <span className="mdc-fab__icon">{children}</span>
      </Component>
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

export default Fab
