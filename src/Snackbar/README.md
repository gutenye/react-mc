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