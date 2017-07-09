// @flow
import React from 'react'
import cx from 'classnames'
import { MDCGridListFoundation } from '@material/grid-list'
import type { PropsT } from '../types'

class GridList extends React.Component {
  static Tiles: any

  props: {
    titleGutter1?: boolean,
    headerCaption?: boolean,
    twolineCaption?: boolean,
    withIconAlign?: 'start' | 'end',
    aspectRatio?: string,
  } & PropsT
  foundation_: any
  root_: any

  state = {
    rootProps: { className: new Set(['mdc-grid-list']) },
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
    const rootClassName = cx(
      {
        'mdc-grid-list--tile-gutter-1': tileGutter1,
        'mdc-grid-list--header-caption': headerCaption,
        'mdc-grid-list--twoline-caption': twolineCaption,
        [`mdc-grid-list--with-icon-align-${withIconAlign}`]: withIconAlign,
        [`mdc-grid-list--tile-aspect-${aspectRatio}`]: aspectRatio,
      },
      Array.from(rootProps.className),
      className
    )
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
