### Design & API Documentation

- [Material Design guidelines: Tabs](https://material.io/guidelines/components/tabs.html)
- [Material Components Web](https://material.io/components/web/catalog/tabs/)

### Usage

**Text only**

```
window.TabBar = require('./index').default;
const items = [
  { text: 'Recents' },
  { text: 'Favorites', active: true },
  { text: 'Nearby' },
];
window.TabsItems = items;
<TabBar items={items} />
```

**Icon only**

```
const items = [
  { icon: <i className="mdc-tab__icon material-icons">phone</i> },
  { icon: <i className="mdc-tab__icon material-icons">favorite</i> },
  { icon: <i className="mdc-tab__icon material-icons">person_pin</i> },
];
<TabBar items={items} />
```

**Text with Icon**

```
const items = [
  { text: 'Recents', icon: <i className="mdc-tab__icon material-icons">phone</i> },
  { text: 'Favorites', icon: <i className="mdc-tab__icon material-icons">favorite</i> },
  { text: 'Nearby', icon: <i className="mdc-tab__icon material-icons">person_pin</i> },
];
<TabBar items={items} />
```



```
<div>
  <h>Primary Color Indicator</h>
  <TabBar indicator='primary' items={window.TabsItems} />

  <h>Secondary Color Indicator</h>
  <TabBar indicator='accent' items={window.TabsItems} />
</div>
```