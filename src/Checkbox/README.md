### Design & API Documentation

- [Material Design guidelines: Selection Controls – Checkbox](https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/checkboxes/)

### Usage

```
const Checkbox = require('./index').default;
initialState = { checked: false };
<div>
  <Checkbox checked={state.checked} onChange={e => setState({checked: e.target.checked})} />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Disabled**

```
const Checkbox = require('./index').default;
<Checkbox disabled onChange={() => {}} />
```
