// @flow
import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class Section extends React.Component {
  props: {
    align: 'start' | 'end',
    shrinkToFit?: boolean,
  } & PropsC

  static defaultProps = {
    component: 'div',
  }
  static displayName = 'Toolbar.Section'

  render() {
    const {
      component: Component,
      align,
      shrinkToFit,
      className,
      ...rest
    } = this.props
    const rootClassName = cx(
      'mdc-toolbar__section',
      {
        [`mdc-toolbar__section--align-${align}`]: align,
        'mdc-toolbar__section--shrink-to-fit': shrinkToFit,
      },
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default Section
