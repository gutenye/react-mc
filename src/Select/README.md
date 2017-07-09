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