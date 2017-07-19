### Design & API Documentation

- [Material Design guidelines: Toolbars](https://material.io/guidelines/components/toolbars.html)
- [Material Components Web](https://material.io/components/web/catalog/toolbar/)

### Usage

**Normal**

```
window.Toolbar = require('./index').default;
<DemoFrame>
  <Toolbar>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        <Toolbar.Icon menu className="material-icons">menu</Toolbar.Icon>
        <Toolbar.Title>Title</Toolbar.Title>
      </Toolbar.Section>
      <Toolbar.Section align='end'>
        <Toolbar.Icon className='material-icons'>file_download</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>print</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>more_vert</Toolbar.Icon>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
  <DemoParagraphs count={3} />
</DemoFrame>
```

**Fixed**

```
<DemoFrame>
  <Toolbar fixed>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        <Toolbar.Icon menu className="material-icons">menu</Toolbar.Icon>
        <Toolbar.Title>Title</Toolbar.Title>
      </Toolbar.Section>
      <Toolbar.Section align='end'>
        <Toolbar.Icon className='material-icons'>file_download</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>print</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>more_vert</Toolbar.Icon>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
  <Toolbar.FixedAdjust>
    <DemoParagraphs count={3} />
  </Toolbar.FixedAdjust>
</DemoFrame>
```

**Waterfall**

```html
<Toolbar fixed waterfall>...</Toolbar>
```


**Default Flexible Toolbar**

```html
<Toolbar flexible flexibleDefaultBehavior>..</Toolbar>
<main style={{marginTop: 224}}>..</main>
```

**Waterfall Flexible Toolbar**

```html
<Toolbar fixed waterfall flexible flexibleDefaultBehavior>..</Toolbar>
<main style={{marginTop: 224}}>..</main>
```

**Waterfall Toolbar Fix Last Row**

```html
<Toolbar fixed fixedLastrowOnly waterfall flexible flexibleDefaultBehavior>
  <Toolbar.Row>..</Toolbar.Row>
  <Toolbar.Row>..</Toolbar.Row>
</Toolbar>
<main style={{marginTop: 224}}>..</main>
```
