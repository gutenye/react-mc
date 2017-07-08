// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

export default ({ className, children, ...rest }: PropsT) =>
  <h2 className={cx('mdc-dialog__header__title', className)} {...rest}>
    {children}
  </h2>
