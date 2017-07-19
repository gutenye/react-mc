### Design & API Documentation

- [Material Design guidelines: Navigation drawer](https://material.io/guidelines/patterns/navigation-drawer.html)
- [Material Components Web](https://material.io/components/web/catalog/drawers/)

### Usage


**Permanent Drawer Above Toolbar**

```
window.Drawer = require('./index').default;
<DemoFrame fullWidth>
  <div style={{display: 'flex'}}>
    <Drawer.Permanent>
      <Drawer.Permanent.ToolbarSpacer />
      <Drawer.Permanent.Content>
        <DemoDrawerContent />
      </Drawer.Permanent.Content>
    </Drawer.Permanent>
    <main>
      <DemoDrawerToolbar />
      <DemoParagraphs count={3} />
    </main>
  </div>
</DemoFrame>
```

**Permanent Drawer Below Toolbar**

```
<DemoFrame fullWidth>
  <DemoDrawerToolbar fixed />
  <Toolbar.FixedAdjust style={{ display: 'flex' }}>
    <Drawer.Permanent>
      <DemoDrawerContent />
    </Drawer.Permanent>
    <main>
      <DemoParagraphs count={3} />
    </main>
  </Toolbar.FixedAdjust>
</DemoFrame>
```

**Persistent Drawer**

```
initialState = { open: true };
<DemoFrame fullWidth>
  <div style={{ display: 'flex' }}>
    <Drawer.Persistent open={state.open} >
      <Drawer.Persistent.Drawer>
        <Drawer.Persistent.ToolbarSpacer />
        <DemoDrawerContent />
      </Drawer.Persistent.Drawer>
    </Drawer.Persistent>
    <div>
      <DemoDrawerToolbar menu onMenuClick={() => setState({ open: !state.open })} />
      <main>
        <div>{JSON.stringify(state)}</div>
        <DemoParagraphs count={10} />
      </main>
    </div>
  </div>
</DemoFrame>
```
