import React, { Component } from 'react'
import { Button } from '../src'

export default class MyButton extends Component {
  render() {
    return (
      <div>
        <Button>Flat Button</Button>
        <Button raised primary>Raised Primary Button</Button>
      </div>
    )
  }
}
