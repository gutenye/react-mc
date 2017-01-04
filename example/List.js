import React, { Component } from 'react'
import { List } from '../src'

export default class MyList extends Component {
  render() {
    return (
      <List>
        <List.Item>hello</List.Item>
        <List.Item>hello</List.Item>
      </List>
    )
  }
}
