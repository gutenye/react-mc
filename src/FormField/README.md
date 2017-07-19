### Design & API Documentation

- [Material Components Web](https://material.io/components/web/catalog/input-controls/form-fields/)

### Usage

```
window.FormField = require('./index').default;
<div>
  <FormField>
    <input type="checkbox" id="FormField1" />
    <label htmlFor="FormField1">Name</label>
  </FormField>

  <h>Align end</h>
  <FormField align='end'>
    <input type="checkbox" id="FormField2" />
    <label htmlFor="FormField2">Name</label>
  </FormField>

  <h>With MDC Components</h>
  <FormField>
    <Checkbox onChange={() => {}} id="FormField3" />
    <label htmlFor="FormField3">Name</label>
  </FormField>
</div>
```