### Design & API Documentation

- [Material Design guidelines: Lists](https://material.io/guidelines/components/lists.html)
- [Material Components Web](https://material.io/components/web/catalog/lists/)

### Usage

**Single-line List**

```
const List = require('./index').default;
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
const List = require('./index').default;
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
const List = require('./index').default;
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
const List = require('./index').default;
<List.Group>
  <List.Group.Subheader>List 1</List.Group.Subheader>
  <List>{_.times(2).map(i => <List.Item key={i}><List.Item.StartDetail className='bg1' />Hello</List.Item>)}</List>

  <List.Divider inset component='hr' />

  <List.Group.Subheader>List 2</List.Group.Subheader>
  <List>{_.times(2).map(i => <List.Item key={i}><List.Item.StartDetail className='bg1' />Hello</List.Item>)}</List>
</List.Group>
```

