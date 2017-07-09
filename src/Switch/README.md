```
const Switch = require('./index').default;
initialState = { checked: false };
<Switch
  checked={state.checked}
  onChange={e => setState({ checked: e.target.checked })}
/>
```