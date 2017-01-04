import React, { Component } from 'react'
import { Radio } from '../src'

export default class MyRadio extends Component {
  render() {
    return (
      <div>
        <Radio name='a'>Facebook</Radio>
        <Radio name='a'>Google</Radio>
      </div>
    )
  }
}
