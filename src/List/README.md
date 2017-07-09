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