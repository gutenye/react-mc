// @flow
import React from 'react'
import cx from 'classnames'
import { MDCRippleFoundation } from '@material/ripple/dist/mdc.ripple'
import Ripple from '../Ripple'
import type { PropsC } from '../types'

export const parseThemeOptions = (theme: ?(string | string[])): string[] => {
  if (theme) {
    const themeItems = Array.isArray(theme) ? theme : theme.split(' ')
    return themeItems.map(v => `mdc-theme--${v}`)
  }
  return []
}

function createBase(props) {
  return class extends React.Component {
    render() {
      const { tag: Tag, theme, className, wrap, ...rest } = this.props
      const classes = cx(className, parseThemeOptions(theme))

      if (wrap) {
        // sometimes we have undfeind children
        if (!rest.children) return null

        // make sure we delete our children here
        // so we dont recrusively clonse ourselves
        Reflect.deleteProperty(rest, 'children')
        const child = React.Children.only(rest.children)
        return React.cloneElement(child, {
          ...child.props,
          ...rest,
          ...{ className: classes },
        })
      } else {
        return <Tag className={classes} {...rest} />
      }
    }
  }
}

class Button extends React.Component {
  props: {
    raised: boolean,
    unelevated: boolean,
    stroked: boolean,
    dense: boolean,
    compact: boolean,
  } & PropsC
  ripple_: any

  static defaultProps = {
    component: 'button',
  }

  state = {
    rootProps: {
      className: {
        'mdc-button': true,
        'mdc-button--raised': this.props.raised,
        'mdc-button--unelevated': this.props.unelevated,
        'mdc-button--stroked': this.props.stroked,
        'mdc-button--dense': this.props.dense,
        'mdc-button--compact': this.props.compact,
      },
    },
  }

  initRipple_() {
    const adapter = Ripple.createAdapter(this)
    return new MDCRippleFoundation(adapter)
  }

  render() {
    const {
      component: Component,
      raised,
      unelevated,
      stroked,
      dense,
      compact,
      className,
      ...rest
    } = this.props
    const { rootProps } = this.state
    const rootClassName = cx(rootProps.className, className)
    return <Component {...rootProps} className={rootClassName} {...rest} />
  }

  componentDidMount() {
    this.ripple_ = this.initRipple_()
    this.ripple_.init()
  }

  componentWillUnmount() {
    this.ripple_.destroy()
  }
}

export default Button
