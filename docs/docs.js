import React from 'react'
import Frame from 'react-frame-component'
import styled from 'styled-components'
import { times } from 'lodash'
import Toolbar from '../src/Toolbar'
import List from '../src/List'

window.pd = console.log.bind(console)
window.log = console.log.bind(console)

window.DemoColumn = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`

window.DemoRow = ({ title, children }) => (
  <DemoRowRoot>
    {title && <h3>{title}</h3>}
    <div className="DemoRow-main">{children}</div>
  </DemoRowRoot>
)

const DemoRowRoot = styled.div`
  .DemoRow-main {
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
`

window.DemoParagraphs = ({ count }) => (
  <div>
    {times(count).map(v => (
      <p key={v}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    ))}
  </div>
)

// eslint-disable-next-line
DemoParagraphs.defaultProps = {
  count: 1,
}

window.DemoFrame = ({ style, children }) => (
  <Frame style={{ width: 320, ...style }}>
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
    <div>{children}</div>
  </Frame>
)

window.DemoDrawerContent = () => (
  <List>
    <List.Item className="mdc-persistent-drawer--selected">
      <List.Item.StartDetail className="material-icons">
        inbox
      </List.Item.StartDetail>
      Inbox
    </List.Item>
    <List.Item>
      <List.Item.StartDetail className="material-icons">
        star
      </List.Item.StartDetail>
      Star
    </List.Item>
  </List>
)

window.DemoDrawerToolbar = ({ menu, onMenuClick, ...rest }) => (
  <Toolbar {...rest}>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        {menu && (
          <Toolbar.Icon menu onClick={onMenuClick} className="material-icons">
            menu
          </Toolbar.Icon>
        )}
        <Toolbar.Title>Title</Toolbar.Title>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
)
