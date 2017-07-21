### Design & API Documentation

- [Material Design guidelines: Sliders](https://material.io/guidelines/components/sliders.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/sliders/)

### Usage

**Continuous Slider**

```
window.Slider = require('./Slider').default;
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    onInput={e => setState({ inputValue: e.target.value })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Discrete Slider**

```
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    discrete
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    onInput={e => setState({ inputValue: e.target.value })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Discrete Slider with markers**

```
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    discrete
    displayMarkers
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    onInput={e => setState({ inputValue: e.target.value })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```

**Step 2**

```
initialState = { value: 10, inputValue: 10 };
<div>
  <Slider
    step={2}
    value={state.value}
    onChange={e => setState({ value: e.target.value })}
    onInput={e => setState({ inputValue: e.target.value })}
  />
  <div>{JSON.stringify(state)}</div>
</div>
```
