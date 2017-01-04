import React, { Component } from 'react'
import { Snackbar } from '../src'

export default class MySnackbar extends Component {
  render() {
    return (
      <div>
        <Snackbar ref='snackbar' />
        <div onClick={this.onClick}>open snackbar</div>
      </div>
    )
  }

  onClick = () => {
    this.refs.snackbar.show({
      message: 'hello',
      timeout: 10000,
      actionHandler: () => pd('click'),
      actionText: 'OK',
    })
  }
}
