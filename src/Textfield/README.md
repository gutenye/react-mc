### Design & API Documentation

- [Material Design guidelines: Text Fields](https://material.io/guidelines/components/text-fields.html)
- [Material Components Web](https://material.io/components/web/catalog/input-controls/text-fields/)

### Usage

```
window.TextField = require('./index').default;
const initialState = { value: '' };
<div>
  <h>Default</h>
  <TextField label="Name" value={state.value} onChange={e => setState({value: e.target.value})} />
  {state.value}

  <h>Required</h>
  <TextField label="Name" required />

  <h>Disabled</h>
  <TextField label="Name" disabled />

  <h>Helper Text</h>
  <TextField label="Name" helptext="Name is required" />

  <h>Helper Text Persistent</h>
  <TextField label="Name" helptext="Name is required" persistent />

  <h>Helper Text as validation message</h>
  <TextField label="Name" helptext="Must be at least 2 characters long" persistent validationMsg required minLength="2" />

  <h>Pre-filled text fields</h>
  <TextField label="Name" value="Guten Ye" onChange={() => {}} />

  <h>Pure CSS</h>
  <TextField placeholder='Name' />

  <h>Fullwidth</h>
  <TextField placeholder='Fullwidth' fullwidth />

  <h>Leading/Trailing icons</h>
  <TextField leadingIcon={<i className='material-icons mdc-text-field__icon' tabindex='0'>event</i>} label="Name" />
</div>
```

**Textarea**

```
<TextField label="Comment" multiline rows="8" cols="40" />
```

**Text Field Boxes**

```
<TextField box onChange={() => {}} />
```