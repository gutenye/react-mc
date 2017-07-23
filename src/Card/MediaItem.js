import React from 'react'
import cx from 'classnames'
import type { PropsC } from '../types'

class MediaItem extends React.Component {
  props: {
    size?: string,
  } & PropsC

  static defaultProps = {
    component: 'img',
  }
  static displayName = 'Card.MediaItem'

  render() {
    const { component: Component, size, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__media-item',
      size && `mdc-card__media-item--${size}`,
      className
    )
    return <Component className={rootClassName} {...rest} />
  }
}

export default MediaItem
