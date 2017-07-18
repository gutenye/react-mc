### Design & API Documentation

- [Material Design guidelines: Floating Action Button](https://material.io/guidelines/components/buttons-floating-action-button.html)
- [Material Components Web](https://material.io/components/web/catalog/buttons/floating-action-buttons/)

### Usage

```
const Fab = require('./index').default;
<doc-row>
  <Fab className="material-icons"><Fab.Icon>favorite</Fab.Icon></Fab>
  <Fab mini className="material-icons"><Fab.Icon>favorite</Fab.Icon></Fab>
  <Fab plain className="material-icons"><Fab.Icon>favorite</Fab.Icon></Fab>
  <Fab plain mini className="material-icons"><Fab.Icon>favorite</Fab.Icon></Fab>
  <Fab disabled className="material-icons"><Fab.Icon>favorite</Fab.Icon></Fab>
</doc-row>
```