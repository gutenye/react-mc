```
const PermanentDrawer = require('./index).default;
<PermanentDrawer>
  <PermanentDrawer.ToolbarSpacer />
  <PermanentDrawer.Content>
    <nav id="icon-with-text-demo" className="mdc-list">
      <a
        className="mdc-list-item mdc-permanent-drawer--selected"
        href="#"
      >
        <i
          className="material-icons mdc-list-item__start-detail"
          aria-hidden="true"
        >
          inbox
        </i>Inbox
      </a>
      <a className="mdc-list-item" href="#">
        <i
          className="material-icons mdc-list-item__start-detail"
          aria-hidden="true"
        >
          star
        </i>Star
      </a>
    </nav>
  </PermanentDrawer.Content>
</PermanentDrawer>
<div style={{display: 'inline-flex'}}>Toolbar and page content go inside here.</div>
```