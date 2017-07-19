import React from 'react'
import Frame from 'react-frame-component'
import { times } from 'lodash'

window.pd = console.log.bind(console)
window.log = console.log.bind(console)

window.DemoParagraphs = ({ count }) =>
  <div>
    {times(count).map(v =>
      <p key={v}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    )}
  </div>

// eslint-disable-next-line
DemoParagraphs.defaultProps = {
  count: 1,
}

window.DemoFrame = ({ children }) =>
  <Frame>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/material-components-web@0.15/dist/material-components-web.min.css"
      rel="stylesheet"
    />
    <style>
      {`
    body { margin: 0; } 
    p { padding: 16px; margin: 0; }
      `}
    </style>
    <div>
      {children}
    </div>
  </Frame>
