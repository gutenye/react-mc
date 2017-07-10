### Design & API Documentation

- [Material Design guidelines: Snackbars & toasts](https://material.io/guidelines/components/snackbars-toasts.html)
- [Material Components Web](https://material.io/components/web/catalog/snackbars/)

### Usage

```
const Snackbar = require('./index').default;
<div>
  <Snackbar ref={v => (this.snackbar = v)} />
  <button
    onClick={() =>
      this.snackbar.show({
        message: new Date(),
        actionText: 'undo',
        actionHandler: () => log('actionhandler'),
      })}
  >
    open snackbar
  </button>
</div>
```