// @flow
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import type { PropsT } from '../types'

class Surface extends React.Component {
  static displayName = 'Dialog.Surface'
  props: PropsT

  static contextTypes = {
    surfaceProps: PropTypes.object,
  }

  render() {
    const { className, children, ...rest } = this.props
    const { surfaceProps } = this.context
    const rootClassName = cx('mdc-dialog__surface', className)
    return (
      <div className={rootClassName} {...surfaceProps} {...rest}>
        {children}
      </div>
    )
  }
}

export default Surface
