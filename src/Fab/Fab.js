// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'
import type { PropsT } from '../types'

class Fab extends React.Component {
  static Icon: any
  props: {
    mini?: boolean,
    plain?: boolean,
  } & PropsT
  ripple_: any

  state = {
    rootProps: {
      className: {
        'mdc-fab': true,
        'mdc-fab--mini': this.props.mini,
        'mdc-fab--plain': this.props.plain,
      },
    },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const { mini, plain, className, children, ...rest } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <button
        {...rootProps}
        className={rootClassName}
        aria-label="Favorite"
        {...rest}
      >
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

export default Fab
