// @flow
import React from 'react'
import cx from 'classnames'
import { MDCGridListFoundation } from '@material/grid-list/dist/mdc.gridList'
import type { PropsT } from '../types'

class GridList extends React.Component {
  static Tiles: any

  props: {
    tileGutter1?: boolean,
    headerCaption?: boolean,
    twolineCaption?: boolean,
    withIconAlign?: 'start' | 'end',
    aspectRatio?: string,
  } & PropsT
  foundation_: any
  root_: any

  state = {
    rootProps: {
      className: {
        'mdc-grid-list': true,
        'mdc-grid-list--tile-gutter-1': this.props.tileGutter1,
        'mdc-grid-list--header-caption': this.props.headerCaption,
        'mdc-grid-list--twoline-caption': this.props.twolineCaption,
        [`mdc-grid-list--with-icon-align-${this.props.withIconAlign}`]: this
          .props.withIconAlign,
        [`mdc-grid-list--tile-aspect-${this.props.aspectRatio}`]: this.props
          .aspectRatio,
      },
    },
  }

  getDefaultFoundation() {
    // prettier-ignore
    return new MDCGridListFoundation({
      getOffsetWidth: () => this.root_.offsetWidth,
      getNumberOfTiles: () => {
        return this.root_.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR).length
      },
      getOffsetWidthForTileAtIndex: (index) => {
        return this.root_.querySelectorAll(MDCGridListFoundation.strings.TILE_SELECTOR)[index].offsetWidth
      },
      setStyleForTilesElement: (property, value) => {
        this.root_.querySelector(MDCGridListFoundation.strings.TILES_SELECTOR).style[property] = value
      },
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
    })
  }

  render() {
    const {
      tileGutter1,
      headerCaption,
      twolineCaption,
      withIconAlign,
      aspectRatio,
      className,
      children,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return (
      <div
        ref={v => (this.root_ = v)}
        {...rootProps}
        className={rootClassName}
        {...rest}
      >
        {children}
      </div>
    )
  }

  componentDidMount() {
    this.foundation_ = this.getDefaultFoundation()
    this.foundation_.init()
  }

  componentWillUnmount() {
    this.foundation_.destroy()
  }
}

export default GridList
