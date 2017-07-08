// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

export default ({ className, children, ...rest }: PropsT) =>
  <section className={cx('mdc-dialog__body', className)} {...rest}>
    {children}
  </section>
