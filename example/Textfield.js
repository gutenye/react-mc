import React, { Component } from 'react'
import { Textfield } from '../src'

export default class MyTextfield extends Component {
  render() {
    return (
      <Textfield label='Name' helptext='name is required' presistent />
    )
  }
}
