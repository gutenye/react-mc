```
const TabBar = require('./index').default;
const items = [
  { text: 'Recents', icon: 'phone', active: true },
  { text: 'Favorites', icon: 'favorite', active: false },
  { text: 'Nearby', icon: 'person_pin', active: false },
];
<TabBar iconsWithText>
  {items.map(item =>
  <TabBar.Tab withIconAndText active={item.active}>
    <TabBar.Icon className='material-icons'>{item.icon}</TabBar.Icon>
    <TabBar.IconText>{item.text}</TabBar.IconText>
  </TabBar.Tab>
  )}
  <TabBar.Indicator />
</TabBar>
```