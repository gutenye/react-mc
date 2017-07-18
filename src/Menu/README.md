### Design & API Documentation

- [Material Design guidelines: Menus](https://material.io/guidelines/components/menus.html)
- [Material Components Web](https://material.io/components/web/catalog/menus/)

### Usage

```
const Menu = require('./index').default;
initialState = { open: false, selected: null };
<div style={{position: 'relative'}}>
  <button onClick={() => setState({open: true})}>OPEN MENU</button>
  <Menu.Simple
    open={state.open}
    onClose={() => setState({open: false})}
    items={[
      { text: 'Facebook', onClick: () => log('Facebook') },
      { text: 'Google', onClick: () => log('Google') },
      { divider: true },
      { text: 'Apple', disabled: true },
    ]}
    onChange={(e) => setState({selected: e.detail.item.text})}
    style={{position: 'absolute', top: 0, left: 0}}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```