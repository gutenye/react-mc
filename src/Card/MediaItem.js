import React, { Component, PropTypes } from 'react'
import cx from 'classnames'

export default class MediaItem extends Component {
  static propTypes = {
    size: PropTypes.string,
  }

  render() {
    const {size, children, className, ...rest} = this.props
    const classes = cx('mdc-card__media-item', size && `mdc-card__media-item--${size}`, className)
    return (
      <img className={classes} {...rest}></img>
    )
  }
}
