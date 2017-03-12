import React, {Component, PropTypes} from 'react'
import { Select, NativeSelect } from '../src'

export default class MySelect extends Component {
  render() {
    return (
      <div>
        <Select label='a'>
          <Select.Option>hello</Select.Option>
          <Select.Option>world</Select.Option>
        </Select>
        <NativeSelect defaultValue='b'>
          <option value='a'>Hello</option>
          <option value='b'>world</option>
        </NativeSelect>
      </div>
    )
  }
}
