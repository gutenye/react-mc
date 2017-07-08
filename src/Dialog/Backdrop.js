// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

export default ({ className, children, ...rest }: PropsT) =>
  <div className={cx('mdc-dialog__backdrop', className)} {...rest}>
    {children}
  </div>
