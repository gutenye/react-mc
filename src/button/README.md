### Design & API Documentation

- [Material Design guidelines: Buttons](https://material.io/guidelines/components/buttons.html)
- [Material Components Web](https://material.io/components/web/catalog/buttons/)

### Usage

```
window.Button = require('./Button').default;
<demo-column>
  <demo-row>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button accent>Accent</Button>
    <Button disabled>Disabled</Button>
  </demo-row>
  <div>
    <h/>
    <Button raised>Raised</Button>
    <h/>
    <Button raised dense>Raised Dense</Button>
    <h/>
    <Button raised compact>Raised Compact</Button>
    <h/>
    <Button raised primary>Raised Primary</Button>
    <h/>
    <Button raised accent>Raised Accent</Button>
    <h/>
    <Button raised disabled>Raised disabled</Button>
  </div>
</demo-column>
```

**Links with Button Style**

```
<Button component='a' href='https://www.google.com' target='_blank'>Google</Button>
```
