// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class FooterButton extends React.Component {
  props: {
    accept?: boolean,
    cancel?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'button',
  }
  static displayName = 'Dialog.Footer.Button'

  render() {
    const {
      component: Component,
      accept,
      cancel,
      className,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-button',
      'mdc-dialog__footer__button',
      {
        'mdc-dialog__footer__button--accept': accept,
        'mdc-dialog__footer__button--cancel': cancel,
      },
      className
    )
    return <Component type="button" className={rootClassName} {...rest} />
  }
}

export default FooterButton
