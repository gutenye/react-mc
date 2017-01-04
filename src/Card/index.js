import '@material/card/dist/mdc.card.css'
import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import Action from './Action'
import Actions from './Actions'
import MediaItem from './MediaItem'
import Primary from './Primary'
import Subtitle from './Subtitle'
import SupportingText from './SupportingText'
import Title from './Title'

class Card extends Component {
  static propTypes = {
    horizontalBlock: PropTypes.bool,
    themeDark: PropTypes.bool,
  }

  render() {
    const {horizontalBlock, themeDark, children, className, ...rest} = this.props
    const classes = cx(horizontalBlock ? 'mdc-card__horizontal-block' : 'mdc-card', {
      'mdc-card--theme-dark': themeDark
    }, className)
    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    )
  }
}

Card.Action = Action
Card.Actions = Actions
Card.MediaItem = MediaItem
Card.Primary = Primary
Card.Subtitle = Subtitle
Card.SupportingText = SupportingText
Card.Title = Title

export default Card
