import React, { Component } from 'react'
import { render } from 'react-dom'
import { Button } from '../src'

class App extends Component {
  render() {
    return (
      <div>
        <Button>Flat Button</Button>
        <Button raised primary>Raised Primary Button</Button>
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
