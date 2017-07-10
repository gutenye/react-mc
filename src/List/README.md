### Design & API Documentation

- [Material Design guidelines: Lists](https://material.io/guidelines/components/lists.html)
- [Material Components Web](https://material.io/components/web/catalog/lists/)

### Usage

```
const List = require('./index').default;
<List>
  {[1, 2].map(i =>
    <List.Item key={i}>
      hello {i}
    </List.Item>
  )}
</List>
```