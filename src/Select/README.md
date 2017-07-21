### Design & API Documentation

- [Material Design guidelines: Text Fields]( https://material.io/guidelines/components/text-fields.html)
- [Material Design guidelines: Menus](https://material.io/guidelines/components/menus.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/select-menus/)

### Usage

```
window.Select = require('./index').default;
window.selectItems = [
  { text: 'Facebook', value: 'facebook' },
  { text: 'Google', value: 'google' },
  { text: 'Apple', value: 'apple', disabled: true },
];
initialState = { value: null };
<div>
  <Select
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    placeholder='Select a company'
    items={selectItems}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Disabled**

```
<Select disabled placeholder='Select a company' items={selectItems}  />
```
