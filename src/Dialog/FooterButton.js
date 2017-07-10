// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class FooterButton extends React.Component {
  static displayName = 'Dialog.Footer.Button'
  props: {
    accept?: boolean,
    cancel?: boolean,
  } & PropsT

  render() {
    const { accept, cancel, className, children, ...rest } = this.props
    return (
      <button
        type="button"
        className={cx(
          'mdc-button',
          'mdc-dialog__footer__button',
          {
            'mdc-dialog__footer__button--accept': accept,
            'mdc-dialog__footer__button--cancel': cancel,
          },
          className
        )}
        {...rest}
      >
        {children}
      </button>
    )
  }
}

export default FooterButton
