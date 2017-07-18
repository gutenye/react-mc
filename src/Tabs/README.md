### Design & API Documentation

- [Material Design guidelines: Tabs](https://material.io/guidelines/components/tabs.html)
- [Material Components Web](https://material.io/components/web/catalog/tabs/)

### Usage

```
const TabBar = require('./index').default;
const items = [
  { text: 'Recents', icon: 'phone', active: true },
  { text: 'Favorites', icon: 'favorite', active: false },
  { text: 'Nearby', icon: 'person_pin', active: false },
];
<TabBar iconsWithText>
  {items.map(item =>
  <TabBar.Tab key={item.text} withIconAndText active={item.active}>
    <TabBar.Icon className='material-icons'>{item.icon}</TabBar.Icon>
    <TabBar.IconText>{item.text}</TabBar.IconText>
  </TabBar.Tab>
  )}
  <TabBar.Indicator />
</TabBar>
```