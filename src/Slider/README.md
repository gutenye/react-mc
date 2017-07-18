### Design & API Documentation

- [Material Design guidelines: Sliders](https://material.io/guidelines/components/sliders.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/sliders/)

### Usage

```
const Slider = require('./Slider').default;
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    value={state.value}
    onChange={({ detail }) => setState({ value: detail.getValue() })}
    onInput={({ detail }) => setState({ inputValue: detail.getValue() })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

```
const Slider = require('./Slider').default;
<div>
  <h>step 1</h>
  <Slider step={1} onChange={() => {}} />
</div>
```
