### Design & API Documentation

- [Material Design guidelines: Buttons](https://material.io/guidelines/components/buttons.html)
- [Material Components Web](https://material.io/components/web/catalog/buttons/)

### Usage

```
window.Button = require('./Button').default;
<DemoColumn>
  <DemoRow title='Text Button'>
    <Button>BASELINE</Button>
    <Button compact>COMPACT</Button>
    <Button dense>DENSE</Button>
    <Button secondary>SECONDARY</Button>
    <Button><i className="material-icons mdc-button__icon">favorite</i>ICON</Button>
    <Button component="a">LINK</Button>
  </DemoRow>
  <DemoRow title='Raised Button'>
    <Button raised>BASELINE</Button>
    <Button raised compact>COMPACT</Button>
    <Button raised dense>DENSE</Button>
    <Button raised secondary>SECONDARY</Button>
    <Button raised><i className="material-icons mdc-button__icon">favorite</i>ICON</Button>
    <Button raised component='a'>LINK</Button>
  </DemoRow>
  <DemoRow title='Unelevated Button (Experimental)'>
    <Button unelevated>BASELINE</Button>
    <Button unelevated compact>COMPACT</Button>
    <Button unelevated dense>DENSE</Button>
    <Button unelevated secondary>SECONDARY</Button>
    <Button unelevated><i className="material-icons mdc-button__icon">favorite</i>ICON</Button>
    <Button unelevated component='a'>LINK</Button>
  </DemoRow>
  <DemoRow title='Stroked Button (Experimental)'>
    <Button stroked>BASELINE</Button>
    <Button stroked compact>COMPACT</Button>
    <Button stroked dense>DENSE</Button>
    <Button stroked secondary>SECONDARY</Button>
    <Button stroked><i className="material-icons mdc-button__icon">favorite</i>ICON</Button>
    <Button stroked component='a'>LINK</Button>
  </DemoRow>
</DemoColumn>
```