/* eslint-disable */
import 'material-components-web/material-components-web.scss'
import React from 'react'
import { render } from 'react-dom'
import {
  Button,
  Card,
  Dialog,
  PermanentDrawer,
  PersistentDrawer,
  TemporaryDrawer,
  Elevation,
  Checkbox,
  Fab,
  FormField,
  GridList,
  IconToggle,
  LayoutGrid,
  LinearProgress,
  Menu,
  List,
  Radio,
  Select,
  NativeSelect,
  Snackbar,
  Textfield,
} from '../src'
const log = console.log.bind(console)

const getPages = () => [
  //MyButton,
  //MyCard,
  //MyCheckbox,
  //MyPermanentDrawer,
  //MyPersistentDrawer,
  //MyTemporaryDrawer,
  //MyElevation,
  //MyFab,
  //MyFormField,
  //MyGridList,
  //MyIconToggle,
  //MyLayoutGrid,
  //MyLinearProgress,
  //MyList,
  //MyMenu,
  MyRadio,
  //MySelect
  //MySnackBar
  //MyTextfield
]

const MyButton = () => <Button>hello</Button>

class MyCard extends React.Component {
  //{{{1
  render() {
    return (
      <Card>
        <Card.Primary>
          <Card.Title>Title</Card.Title>
          <Card.Subtitle>Subtitle</Card.Subtitle>
        </Card.Primary>
        <Card.SupportingText>hello world</Card.SupportingText>
        <Card.Actions>
          <Card.Action>Action 1</Card.Action>
          <Card.Action>Action 2</Card.Action>
        </Card.Actions>
      </Card>
    )
  }
}

class MyCheckbox extends React.Component {
  state = {
    checked: false,
  }
  render() {
    return (
      <Checkbox
        checked={this.state.checked}
        onChange={e => this.setState({ checked: e.target.checked })}
      />
    )
  }
}

class MyPermanentDrawer extends React.Component {
  render() {
    return (
      <div>
        <PermanentDrawer>
          <PermanentDrawer.ToolbarSpacer />
          <PermanentDrawer.Content>
            <nav id="icon-with-text-demo" className="mdc-list">
              <a
                className="mdc-list-item mdc-permanent-drawer--selected"
                href="#"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  inbox
                </i>Inbox
              </a>
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  star
                </i>Star
              </a>
            </nav>
          </PermanentDrawer.Content>
        </PermanentDrawer>
        <div>Toolbar and page content go inside here.</div>
      </div>
    )
  }
}

class MyPersistentDrawer extends React.Component {
  state = {
    open: false,
  }
  render() {
    return (
      <div>
        <PersistentDrawer
          open={this.state.open}
          onOpen={() => log('onOpen')}
          onClose={() => log('onClose')}
        >
          <PersistentDrawer.Drawer>
            <PersistentDrawer.Header>
              <PersistentDrawer.HeaderContent>
                Header here
              </PersistentDrawer.HeaderContent>
            </PersistentDrawer.Header>
            <nav
              id="icon-with-text-demo"
              className="mdc-persistent-drawer__content mdc-list"
            >
              <a
                className="mdc-list-item mdc-persistent-drawer--selected"
                href="#"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  inbox
                </i>Inbox
              </a>
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  star
                </i>Star
              </a>
            </nav>
          </PersistentDrawer.Drawer>
        </PersistentDrawer>
        <button onClick={() => this.setState({ open: !this.state.open })}>
          Toggle Drawer: {JSON.stringify(this.state.open)}
        </button>
      </div>
    )
  }
}

class MyTemporaryDrawer extends React.Component {
  state = {
    open: false,
  }
  render() {
    return (
      <div>
        <TemporaryDrawer
          open={this.state.open}
          onOpen={() => log('onOpen')}
          onClose={() => this.setState({ open: false })}
        >
          <TemporaryDrawer.Drawer>
            <TemporaryDrawer.Header>
              <TemporaryDrawer.HeaderContent>
                Header here
              </TemporaryDrawer.HeaderContent>
            </TemporaryDrawer.Header>
            <nav
              id="icon-with-text-demo"
              className="mdc-persistent-drawer__content mdc-list"
            >
              <a
                className="mdc-list-item mdc-persistent-drawer--selected"
                href="#"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  inbox
                </i>Inbox
              </a>
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  star
                </i>Star
              </a>
            </nav>
          </TemporaryDrawer.Drawer>
        </TemporaryDrawer>
        <button onClick={() => this.setState({ open: !this.state.open })}>
          Toggle Drawer: {JSON.stringify(this.state.open)}
        </button>
      </div>
    )
  }
}

class MyElevation extends React.Component {
  render() {
    return <Elevation z="20">hello</Elevation>
  }
}

class MyFab extends React.Component {
  render() {
    return (
      <Fab className="material-icons">
        <Fab.Icon>favorite</Fab.Icon>
      </Fab>
    )
  }
}

class MyFormField extends React.Component {
  render() {
    return (
      <FormField>
        <input type="checkbox" id="input" />
        <label htmlFor="input">Input Label</label>
      </FormField>
    )
  }
}

class MyGridList extends React.Component {
  render() {
    return (
      <GridList>
        <GridList.Tiles>
          {[1, 2].map(v =>
            <GridList.Tile key={v}>
              <GridList.Tile.Primary>
                <GridList.Tile.PrimaryContent src="//via.placeholder.com/300x300" />
              </GridList.Tile.Primary>
              <GridList.Tile.Secondary>
                <GridList.Tile.Title>Title</GridList.Tile.Title>
              </GridList.Tile.Secondary>
            </GridList.Tile>
          )}
        </GridList.Tiles>
      </GridList>
    )
  }
}

class MyIconToggle extends React.Component {
  state = {
    on: true,
  }
  render() {
    return (
      <div>
        <IconToggle
          on={this.state.on}
          onChange={({ isOn }) => this.setState({ on: isOn })}
          className="material-icons"
          dataToggleOn={{ label: 'Remove from favorites', content: 'favorite' }}
          dataToggleOff={{
            label: 'Add to favorites',
            content: 'favorite_border',
          }}
        >
          favorite_border
        </IconToggle>
        {JSON.stringify(this.state.on)}
      </div>
    )
  }
}

class MyLayoutGrid extends React.Component {
  render() {
    return (
      <LayoutGrid>
        <LayoutGrid.Inner>
          <LayoutGrid.Cell order="2"> a </LayoutGrid.Cell>
          <LayoutGrid.Cell order="1"> b </LayoutGrid.Cell>
          <LayoutGrid.Cell> c </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    )
  }
}

class MyLinearProgress extends React.Component {
  render() {
    return (
      <div>
        <p>
          <LinearProgress progress={0.5} />
          Determinate
        </p>
        <p>
          <LinearProgress progress={0.5} indeterminate />
          Indeterminate
        </p>
        <p>
          <LinearProgress progress={0.5} buffer={0.75} />
          Buffer
        </p>
        <p>
          <LinearProgress progress={0.5} reversed />
          Reversed
        </p>
        <p>
          <LinearProgress progress={0.5} indeterminate reversed />
          Indeterminate Reversed
        </p>
        <p>
          <LinearProgress progress={0.5} buffer={0.75} reversed />
          Buffer Reversed
        </p>
        <p>
          <LinearProgress progress={0.5} accent />
          Accent
        </p>
      </div>
    )
  }
}

class MyList extends React.Component {
  render() {
    return (
      <div>
        <List>
          {[1, 2].map(i =>
            <List.Item key={i}>
              hello {i}
            </List.Item>
          )}
        </List>

        <List twoLine>
          {[1, 2].map(i =>
            <List.Item key={i}>
              <List.Item.Text>
                Two-line item {i}
                <List.Item.Text.Secondary>
                  Seconday Text
                </List.Item.Text.Secondary>
              </List.Item.Text>
            </List.Item>
          )}
        </List>
      </div>
    )
  }
}

class MyMenu extends React.Component {
  state = {
    open: true,
  }
  render() {
    return (
      <div>
        <Menu.Simple
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
        >
          <Menu.Simple.Items>
            {[1, 2].map(i =>
              <Menu.Simple.Item key={i}>
                Item {i}
              </Menu.Simple.Item>
            )}
          </Menu.Simple.Items>
        </Menu.Simple>
        <button onClick={() => this.setState({ open: !this.state.open })}>
          toggle menu: {JSON.stringify(this.state.open)}
        </button>
      </div>
    )
  }
}

class MyRadio extends React.Component {
  render() {
    return (
      <div>
        <Radio name="a">Facebook</Radio>
        <Radio name="a">Google</Radio>
      </div>
    )
  }
}

class MySelect extends React.Component {
  render() {
    return (
      <div>
        <Select label="a">
          <Select.Option>hello</Select.Option>
          <Select.Option>world</Select.Option>
        </Select>
        <NativeSelect defaultValue="b">
          <option value="a">Hello</option>
          <option value="b">world</option>
        </NativeSelect>
      </div>
    )
  }
}

class MySnackbar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar ref="snackbar" />
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

class MyTextfield extends React.Component {
  render() {
    return <Textfield label="Name" helptext="name is required" Persistent />
  }
}

class App extends React.Component {
  render() {
    const pages = getPages()
    return (
      <div>
        {pages.map((v, i) => React.createElement(v, { key: i }))}
      </div>
    )
  }
}

render(<App />, document.querySelector('#app'))

// vim: fdm=marker
