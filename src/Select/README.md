### Design & API Documentation

- [Material Design guidelines: Text Fields]( https://material.io/guidelines/components/text-fields.html)
- [Material Design guidelines: Menus](https://material.io/guidelines/components/menus.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/select-menus/)

### Usage

```
const Select = require('./index').default;
<Select
  selectedText="a"
  items={[
    { text: 'Facebook', role: 'option' },
    { text: 'Google', role: 'option' },
  ]}
  onChange={v => log('onChange', v)}
/>
```