```
const Dialog = require('./index').default;
initialState = {isOpen: false};
<div>
  <Dialog
    isOpen={state.isOpen}
    onClose={() => setState({isOpen: false})}
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
  <button onClick={() => setState({isOpen: true})}>
    Open Dialog
  </button>
</div>
```