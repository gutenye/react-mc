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
window.ToolbarRow = (
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
);
<DemoFrame>
  <Toolbar fixed ref={v => this.toolbar = v}>
    {ToolbarRow}
  </Toolbar>
  <Toolbar.FixedAdjust ref={v => this.toolbar.fixedAdjustElement = v}>
    <DemoParagraphs count={3} />
  </Toolbar.FixedAdjust>
</DemoFrame>
```

**Waterfall**

```
<DemoFrame>
  <Toolbar fixed waterfall ref={v => this.toolbar = v}>
    {ToolbarRow}
  </Toolbar>
  <Toolbar.FixedAdjust ref={v => this.toolbar.fixedAdjustElement = v}>
    <DemoParagraphs count={3} />
  </Toolbar.FixedAdjust>
</DemoFrame>
```


**Default Flexible Toolbar**

```
<DemoFrame style={{height: 300}}>
  <Toolbar flexible flexibleDefaultBehavior>
    {ToolbarRow}
  </Toolbar>
  <main>
    <DemoParagraphs count={3} />
  </main>
</DemoFrame>
```

**Waterfall Flexible Toolbar**

```
<DemoFrame style={{height: 300}}>
  <Toolbar fixed waterfall flexible flexibleDefaultBehavior ref={v => this.toolbar = v}>
    {ToolbarRow}
  </Toolbar>
  <Toolbar.FixedAdjust ref={v => this.toolbar.fixedAdjustElement = v}>
    <DemoParagraphs count={3} />
  </Toolbar.FixedAdjust>
</DemoFrame>
```

**Waterfall Toolbar Fix Last Row**

```
<DemoFrame style={{height: 356}}>
  <Toolbar fixed fixedLastrowOnly waterfall flexible flexibleDefaultBehavior ref={v => this.toolbar = v}>
    <Toolbar.Row>
      <Toolbar.Section align="start">
        <Toolbar.Icon menu className="material-icons">menu</Toolbar.Icon>
        <Toolbar.Title>Title</Toolbar.Title>
      </Toolbar.Section>
    </Toolbar.Row>
    <Toolbar.Row>
      <Toolbar.Section align='end'>
        <Toolbar.Icon className='material-icons'>file_download</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>print</Toolbar.Icon>
        <Toolbar.Icon className='material-icons'>more_vert</Toolbar.Icon>
      </Toolbar.Section>
    </Toolbar.Row>
  </Toolbar>
  <Toolbar.FixedAdjust ref={v => this.toolbar.fixedAdjustElement = v}>
    <DemoParagraphs count={3} />
  </Toolbar.FixedAdjust>
</DemoFrame>
```
