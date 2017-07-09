```
const Slider = require('./Slider').default;
initialState = { value: 10};
<Slider
  value={state.value}
  onChange={({ detail }) => setState({ value: detail.value })}
/>
```