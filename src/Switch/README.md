### Design & API Documentation

- [Material Design guidelines: Switches](https://material.io/guidelines/components/selection-controls.html#selection-controls-switch)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/switches/)

### Usage

```
const Switch = require('./index').default;
initialState = { checked: false };
<Switch
  checked={state.checked}
  onChange={e => setState({ checked: e.target.checked })}
/>
```