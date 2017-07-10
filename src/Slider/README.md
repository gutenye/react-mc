### Design & API Documentation

- [Material Design guidelines: Sliders](https://material.io/guidelines/components/sliders.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/sliders/)

### Usage

```
const Slider = require('./Slider').default;
initialState = { value: 10};
<Slider
  value={state.value}
  onChange={({ detail }) => setState({ value: detail.value })}
/>
```