import React from 'react'
import cx from 'classnames'
import type { PropsT } from '../types'

class MediaItem extends React.Component {
  props: {
    size?: string,
  } & PropsT

  render() {
    const { size, children, className, ...rest } = this.props
    const rootClassName = cx(
      'mdc-card__media-item',
      size && `mdc-card__media-item--${size}`,
      className
    )
    return <img className={rootClassName} {...rest} />
  }
}

export default MediaItem
