```
const IconToggle = require('./index').default;
initialState = {on: false};
<IconToggle
  on={state.on}
  onChange={(e) => setState({ on: e.detail.isOn })}
  className="material-icons"
  dataToggleOn={{ label: 'Remove from favorites', content: 'favorite' }}
  dataToggleOff={{
    label: 'Add to favorites',
    content: 'favorite_border',
  }}
>
  favorite_border
</IconToggle>
```