import React, { Component } from 'react'
import { render } from 'react-dom'

const pages = [
  require('./Button').default,
  require('./Checkbox').default,
  require('./FAB').default,
  require('./List').default,
  require('./Card').default,
  require('./Radio').default,
  require('./Snackbar').default,
]

class App extends Component {
  render() {
    return (
      <div>
        {pages.map((v,i) =>
          React.createElement(v, {key: i})
        )}
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))
