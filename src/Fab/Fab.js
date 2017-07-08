// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple'
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
    rootProps: { className: new Set() },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const { mini, plain, className, children, ...rest } = this.props
    const { rootProps } = this.state
    return (
      <button
        {...rootProps}
        className={cx(
          'mdc-fab',
          {
            'mdc-fab--mini': mini,
            'mdc-fab--plain': plain,
          },
          Array.from(rootProps.className),
          className
        )}
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
