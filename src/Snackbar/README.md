### Design & API Documentation

- [Material Design guidelines: Snackbars & toasts](https://material.io/guidelines/components/snackbars-toasts.html)
- [Material Components Web](https://material.io/components/web/catalog/snackbars/)

### Usage

```
window.Snackbar = require('./index').default;
const show = (arg) => () => self.snackbar.show({timeout: 2000, ...arg});
const self = {};
<DemoRow>
  <Snackbar ref={v => (self.snackbar = v)} />
  <button onClick={show({message: new Date()})}>Show</button>
  <button onClick={show({message: new Date(), actionText: 'undo', actionHandler: () => log('undo')})}>With Action</button>
  <button onClick={show({message: new Date(), multiline: true})}>With multiline</button>
  <button onClick={show({message: new Date(), actionText: 'undo', actionHandler() {}, multiline: true, actionOnBottom: true})}>With multiline and actionOnBottom</button>
</DemoRow>
```

**Start Aligned**

```
const self = {};
<div>
  <Snackbar align='start' style={{zIndex: 10}} ref={v => (self.snackbar = v)} />
  <button onClick={v => self.snackbar.show({message: new Date(), timeout: 1000})}>SHOW</button>
</div>
```