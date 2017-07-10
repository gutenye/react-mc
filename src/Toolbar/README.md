### Design & API Documentation

- [Material Design guidelines: Toolbars](https://material.io/guidelines/components/toolbars.html)
- [Material Components Web](https://material.io/components/web/catalog/toolbar/)

### Usage

```
const Toolbar = require('./index').default;
<Toolbar>
  <Toolbar.Row>
    <Toolbar.Section align="start">
      <Toolbar.Icon menu className="material-icons">
        menu
      </Toolbar.Icon>
      <Toolbar.Title>Title</Toolbar.Title>
    </Toolbar.Section>
  </Toolbar.Row>
</Toolbar>
```