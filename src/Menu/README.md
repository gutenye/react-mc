```
const Menu = require('./index').default;
initialState = { open: false };
<div>
  <button onClick={() => setState({open: true})}>open menu</button>
  <Menu.Simple
    open={state.open}
    onClose={() => setState({open: false})}
    items={[
      { text: 'Facebook', onClick: () => log('Facebook') },
      { text: 'Google', onClick: () => log('Google') },
      { text: 'Apple', disabled: true },
    ]}
  />
</div>
```