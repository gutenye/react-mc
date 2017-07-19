### Design & API Documentation

- [Material Design guidelines: Selection Controls - Radio buttons](https://material.io/guidelines/components/selection-controls.html#selection-controls-radio-button)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/radio-buttons/)

### Usage

```
window.Radio = require('./index').default;
initialState = { company: 'google' };
<div>
  <FormField>
    <Radio name="company" id="Radio1" value='facebook' checked={state.company === 'facebook'} onChange={e => setState({company: e.target.value})} />
    <label htmlFor="Radio1">Facebook</label>
  </FormField>
  <FormField>
    <Radio name="company" id="Radio2" value='google' checked={state.company === 'google'} onChange={e => setState({company: e.target.value})} />
    <label htmlFor="Radio2">Google</label>
  </FormField>
  <div>{JSON.stringify(state)}</div>
</div>
```

**Disabled**

```
<FormField>
  <Radio disabled onChange={() => {}} />
  <label>Facebook</label>
  <Radio disabled checked onChange={() => {}} />
  <label>Google</label>
</FormField>
```

