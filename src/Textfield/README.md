### Design & API Documentation

- [Material Design guidelines: Text Fields](https://material.io/guidelines/components/text-fields.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/text-fields/)

### Usage

```
window.Textfield = require('./index').default;
const initialState = { value: '' };
<div>
  <h>Default</h>
  <Textfield label="Name" value={state.value} onChange={e => setState({value: e.target.value})} />
  {state.value}

  <h>Required</h>
  <Textfield label="Name" required />

  <h>Disabled</h>
  <Textfield label="Name" disabled />

  <h>Helper Text</h>
  <Textfield label="Name" helptext="Name is required" />

  <h>Helper Text Persistent</h>
  <Textfield label="Name" helptext="Name is required" persistent />

  <h>Helper Text as validation message</h>
  <Textfield label="Name" helptext="Must be at least 2 characters long" persistent validationMsg required minLength="2" />

  <h>Pre-filled text fields</h>
  <Textfield label="Name" value="Guten Ye" onChange={() => {}} />

  <h>Pure CSS</h>
  <Textfield placeholder='Name' />

  <h>Fullwidth</h>
  <Textfield placeholder='Fullwidth' fullwidth />
</div>
```

**Multiline**

```
<Textfield label="Comment" multiline rows="8" cols="40" />
```

**Text Field Boxes**

```
<Textfield box onChange={() => {}} />
```