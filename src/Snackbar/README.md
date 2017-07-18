### Design & API Documentation

- [Material Design guidelines: Snackbars & toasts](https://material.io/guidelines/components/snackbars-toasts.html)
- [Material Components Web](https://material.io/components/web/catalog/snackbars/)

### Usage

```
const Snackbar = require('./index').default;
const show = (arg) => () => this.snackbar.show({timeout: 1000, ...arg});
<doc-row>
  <Snackbar ref={v => (this.snackbar = v)} />
  <button onClick={show({message: new Date()})}>Show</button>
  <button onClick={show({message: new Date(), actionText: 'undo', actionHandler() {}})}>With Action</button>
  <button onClick={show({message: new Date(), multiline: true})}>With multiline</button>
  <button onClick={show({message: new Date(), actionText: 'undo', actionHandler() {}, multiline: true, actionOnBottom: true})}>With multiline and actionOnBottom</button>
</doc-row>
```

**Start Aligned**

```
const Snackbar = require('./index').default;
<div>
  <Snackbar align='start' ref={v => (this.snackbar = v)} />
  <button onClick={v => this.snackbar.show({message: new Date(), timeout: 1000})}>SHOW</button>
</div>
```