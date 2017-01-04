import React, { Component } from 'react'
import { Card } from '../src'

export default class MyCard extends Component {
  render() {
    return (
      <Card>
        <Card.Primary>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Primary>
        <Card.SupportingText>
          hello world
        </Card.SupportingText>
        <Card.Actions>
          <Card.Action>Action 1</Card.Action>
          <Card.Action>Action 2</Card.Action>
        </Card.Actions>
      </Card>
    )
  }
}
