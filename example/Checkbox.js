import React, { Component } from 'react'
import { Checkbox } from '../src'

export default class MyCheckbox extends Component {
  render() {
    return <Checkbox checked={true} onChange={this.onChange} />
  }

  onChange= (e) => {
    pd('onChange', e.target.checked)
  }
}
