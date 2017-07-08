// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import { MDCFormFieldFoundation } from '@material/form-field'
import type { PropsT } from '../types'

class FormField extends React.Component {
  props: {
    align?: 'end',
  } & PropsT
  foundation_: any
  root_: any
  label_: any
  input_: any

  getDefaultFoundation() {
    this.root_ = ReactDOM.findDOMNode(this)
    this.label_ = this.root_.querySelector(
      MDCFormFieldFoundation.strings.LABEL_SELECTOR
    )
    // prettier-ignore
    return new MDCFormFieldFoundation({
      registerInteractionHandler: (type, handler) => this.label_.addEventListener(type, handler),
      deregisterInteractionHandler: (type, handler) => this.label_.removeEventListener(type, handler),
      activateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.activate()
        }
      },
      deactivateInputRipple: () => {
        if (this.input_ && this.input_.ripple) {
          this.input_.ripple.deactivate()
        }
      },
    })
  }

  render() {
    const { align, className, children, ...rest } = this.props
    return (
      <div
        className={cx(
          'mdc-form-field',
          {
            [`mdc-form-field--align-${align}`]: align,
          },
          className
        )}
        {...rest}
      >
        {children}
      </div>
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

export default FormField
