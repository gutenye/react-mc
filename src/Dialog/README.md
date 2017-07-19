### Design & API Documentation

- [Material Design guidelines: Dialogs](https://material.io/guidelines/components/dialogs.html)
- [Material Components Web](https://material.io/components/web/catalog/dialogs/)

### Usage

```
window.Dialog = require('./index').default;
initialState = {open: false};
<div>
  <Dialog
    open={state.open}
    onClose={() => setState({open: false})}
    onAccept={() => console.log('onAccept')}
    onCancel={() => console.log('onCancel')}
  >
    <Dialog.Surface>
      <Dialog.Header>
        <Dialog.Header.Title>
          Use Google's location service?
        </Dialog.Header.Title>
      </Dialog.Header>
      <Dialog.Body>
        Let Google help apps determine location. This means sending
        anonymous location data to Google, even when no apps are running.
      </Dialog.Body>
      <Dialog.Footer>
        <Dialog.Footer.Button cancel>Cancel</Dialog.Footer.Button>
        <Dialog.Footer.Button accept>Accept</Dialog.Footer.Button>
      </Dialog.Footer>
    </Dialog.Surface>
    <Dialog.Backdrop />
  </Dialog>
  <button onClick={() => setState({open: true})}>
    OPEN DIALOG
  </button>
  <div>{JSON.stringify(state)}</div>
</div>
```