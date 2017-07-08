import React from 'react'
import cx from 'classnames'

type PropsT = {
  accept?: boolean,
  cancel?: boolean,
  className?: string,
  children: any,
}

export default ({ accept, cancel, className, children, ...rest }: PropsT) =>
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
