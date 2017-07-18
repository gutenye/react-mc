/* eslint-disable */
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
  Slider,
  Snackbar,
  Switch,
  Toolbar,
  Textfield,
} from '../src'
const log = console.log.bind(console)

const getPages = () => [
  //MyButton,
  //MyCard,
  // MyDialog,
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
  // MyMenu,
  MyRadio,
  // MySelect,
  // MySlider,
  // MySnackbar,
  // MySwitch,
  // MyToolbar,
  // MyTextfield,
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

class MyDialog extends React.Component {
  state = {
    open: false,
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ open: true })}>
          Open Dialog
        </button>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          onAccept={() => console.log('onAccept')}
          onCancel={() => console.log('onCancel')}
        >
          <Dialog.Surface>
            <Dialog.Header>
              <Dialog.Header.Title>
                Use Google's location service?
              </Dialog.Header.Title>
            </Dialog.Header>
            <Dialog.Body>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.Footer.Button cancel>Cancel</Dialog.Footer.Button>
              <Dialog.Footer.Button accept>Accept</Dialog.Footer.Button>
            </Dialog.Footer>
          </Dialog.Surface>
          <Dialog.Backdrop />
        </Dialog>
      </div>
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
          onChange={e => this.setState({ on: e.detail.isOn })}
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
    open: false,
  }
  render() {
    return (
      <div>
        <Menu.Simple
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          items={[
            { text: 'Facebook', onClick: () => log('Facebook') },
            { text: 'Google', onClick: () => log('Google') },
            { text: 'Apple', disabled: true },
          ]}
        />
        <button onClick={() => this.setState({ open: !this.state.open })}>
          toggle menu: {JSON.stringify(this.state.open)}
        </button>
        <button onClick={() => this.setState({ open: 0 })}>
          open with selectedIndex
        </button>
      </div>
    )
  }
}

class MyRadio extends React.Component {
  state = {
    company: 'google',
  }

  render() {
    return (
      <div>
        <Radio
          name="company"
          id="Radio1"
          value="facebook"
          checked={this.state.company === 'facebook'}
          onChange={e => this.setState({ company: e.target.value })}
        />
        <label htmlFor="Radio1">Facebook</label>
        <Radio
          name="company"
          id="Radio2"
          value="google"
          checked={this.state.company === 'google'}
          onChange={e => this.setState({ company: e.target.value })}
        />
        <label htmlFor="Radio2">Google</label>
        <div>
          {JSON.stringify(this.state)}
        </div>
      </div>
    )
  }
}

class MySelect extends React.Component {
  render() {
    return (
      <div>
        <Select
          selectedText="a"
          items={[
            { text: 'Facebook', role: 'option' },
            { text: 'Google', role: 'option' },
          ]}
          onChange={v => log('onChange', v)}
        />
      </div>
    )
  }
}

class MySlider extends React.Component {
  state = {
    value: 10,
  }
  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          onChange={({ detail }) => this.setState({ value: detail.value })}
        />
        {this.state.value}
      </div>
    )
  }
}

class MySnackbar extends React.Component {
  render() {
    return (
      <div>
        <Snackbar ref={v => (this.snackbar = v)} />
        <div
          onClick={() =>
            this.snackbar.show({
              message: new Date(),
              actionText: 'undo',
              actionHandler: () => log('actionhandler'),
            })}
        >
          open snackbar
        </div>
      </div>
    )
  }
}

class MySwitch extends React.Component {
  state = {
    checked: true,
  }
  render() {
    return (
      <div>
        <label className="mdc-switch-label">
          <Switch
            checked={this.state.checked}
            onChange={e => this.setState({ checked: e.target.checked })}
          />
          on/off
        </label>
        {JSON.stringify(this.state.checked)}
      </div>
    )
  }
}

class MyToolbar extends React.Component {
  render() {
    return (
      <Toolbar>
        <Toolbar.Row>
          <Toolbar.Section align="start">
            <Toolbar.Icon menu className="material-icons">
              menu
            </Toolbar.Icon>
            <Toolbar.Title>Title</Toolbar.Title>
          </Toolbar.Section>
        </Toolbar.Row>
      </Toolbar>
    )
  }
}

class MyTextfield extends React.Component {
  render() {
    return <Textfield label="Name" helptext="name is required" persistent />
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
