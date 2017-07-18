### Design & API Documentation

- [Material Design guidelines: Sliders](https://material.io/guidelines/components/sliders.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/sliders/)

### Usage

**Continuous Slider**

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

**Discrete Slider**

```
const Slider = require('./Slider').default;
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    discrete
    value={state.value}
    onChange={({ detail }) => setState({ value: detail.getValue() })}
    onInput={({ detail }) => setState({ inputValue: detail.getValue() })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Discrete Slider with markers**

```
const Slider = require('./Slider').default;
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    discrete
    displayMarkers
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
  <h>step 2</h>
  <Slider step={2} onChange={() => {}} />
</div>
```
