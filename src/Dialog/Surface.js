// @flow
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import type { PropsC } from '../types'

class Surface extends React.Component {
  props: PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Dialog.Surface'

  static contextTypes = {
    surfaceProps: PropTypes.object,
  }

  render() {
    const { component: Component, className, ...rest } = this.props
    const { surfaceProps } = this.context
    const rootClassName = cx('mdc-dialog__surface', className)
    return <Component className={rootClassName} {...surfaceProps} {...rest} />
  }
}

export default Surface
