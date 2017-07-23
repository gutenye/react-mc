### Design & API Documentation

- [Material Design guidelines: Lists](https://material.io/guidelines/components/lists.html)
- [Material Components Web](https://material.io/components/web/catalog/lists/)

### Usage

**Example: Settings Page**

```
<demo-mobile class='demo-settings-page'>
  <List avatarList>
    <List.Item>
      <List.Item.StartDetail component='img' src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png' />
      <List.Item.Text>
        Guten Ye
        <List.Item.Text.Secondary>Apple Id, iCloud, iTunes & App Store</List.Item.Text.Secondary>
      </List.Item.Text>
      <List.Item.EndDetail className='material-icons'>keyboard_arrow_right</List.Item.EndDetail>
    </List.Item>
  </List>
  <seperator />

  <List>
    <List.Item>
      <List.Item.StartDetail className='material-icons'>network_wifi</List.Item.StartDetail>
      Wi-Fi
      <List.Item.EndDetail className='material-icons'>keyboard_arrow_right</List.Item.EndDetail>
    </List.Item>
    <List.Divider inset />
    <List.Item>
      <List.Item.StartDetail className='material-icons'>bluetooth</List.Item.StartDetail>
      Bluetooth
      <List.Item.EndDetail className='material-icons'>keyboard_arrow_right</List.Item.EndDetail>
    </List.Item>
  </List>
</demo-mobile>
```

**Single-line List**

```
window.List = require('./index').default;
<div>
<List>
  {_.times(2).map(i =>
    <List.Item key={i}>Hello</List.Item>
  )}
</List>

<h>Start Detail</h>
<List>
  {_.times(2).map(i =>
    <List.Item key={i}>
      <List.Item.StartDetail className='material-icons'>network_wifi</List.Item.StartDetail>
      Hello
   </List.Item>
  )}
</List>

<h>Avatar List</h>
<List avatarList>
  {_.times(2).map(i =>
    <List.Item key={i}>
      <List.Item.StartDetail component='img' src='http://via.placeholder.com/40x40' />
      Hello
   </List.Item>
  )}
</List>

<h>End Detail</h>
<List>
  {_.times(2).map(i =>
    <List.Item key={i}>
      Hello
      <List.Item.EndDetail className='material-icons'>favorite_border</List.Item.EndDetail>
   </List.Item>
  )}
</List>

<h>Start Detail + End Detail</h>
<List>
  {_.times(2).map(i =>
    <List.Item key={i}>
      <List.Item.StartDetail className='bg1' />
      Hello
      <List.Item.EndDetail className='material-icons'>favorite_border</List.Item.EndDetail>
   </List.Item>
  )}
</List>
</div>
```

**Two-line List**

```
<div>
<List>
  {_.times(2).map(i =>
    <List.Item key={i}>
      <List.Item.Text>
        Hello
        <List.Item.Text.Secondary>Secondary Text</List.Item.Text.Secondary>
      </List.Item.Text>
    </List.Item>
  )}
</List>
</div>
```

**List Dividers**

```
<div>
<List>
  <List.Item>Hello</List.Item>
  <List.Divider />
  <List.Item>Hello</List.Item>
</List>

<List>
  <List.Item><List.Item.StartDetail className='bg1' />Hello</List.Item>
  <List.Divider inset />
  <List.Item><List.Item.StartDetail className='bg1' />Hello</List.Item>
</List>
</div>
```

**List Groups**

```
<List.Group>
  <List.Group.Subheader>List 1</List.Group.Subheader>
  <List>{_.times(2).map(i => <List.Item key={i}><List.Item.StartDetail className='bg1' />Hello</List.Item>)}</List>

  <List.Divider inset component='hr' />

  <List.Group.Subheader>List 2</List.Group.Subheader>
  <List>{_.times(2).map(i => <List.Item key={i}><List.Item.StartDetail className='bg1' />Hello</List.Item>)}</List>
</List.Group>
```

**With custom component**

```
<List>
  <List.Item component='a' href='#link-a'>Link A</List.Item>
  <List.Item component='a' href='#link-b'>Link B</List.Item>
</List>
```


