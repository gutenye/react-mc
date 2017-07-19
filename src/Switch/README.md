### Design & API Documentation

- [Material Design guidelines: Switches](https://material.io/guidelines/components/selection-controls.html#selection-controls-switch)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/switches/)

### Usage

```
window.Switch = require('./index').default;
initialState = { checked: false };
<div>
  <Switch
    checked={state.checked}
    onChange={e => setState({ checked: e.target.checked })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

```
<div>
  <h>Disabled</h>
  <Switch disabled onChange={() => {}} />
</div>
```