### Design & API Documentation

- [Material Design guidelines: Progress & activity](https://material.io/guidelines/components/progress-activity.html)
- [Material Components Web](https://material.io/components/web/catalog/linear-progress/)

### Usage

```
window.LinearProgress = require('./index').default;
<div>
  <h>Determinate</h>
  <LinearProgress progress={0.5} />

  <h>Indeterminate</h>
  <LinearProgress progress={0.5} indeterminate />

  <h>Buffer</h>
  <LinearProgress progress={0.5} buffer={0.75} />

  <h>Reversed</h>
  <LinearProgress progress={0.5} reversed />

  <h>Indeterminate Reversed</h>
  <LinearProgress progress={0.5} indeterminate reversed />

  <h>Buffer Reversed</h>
  <LinearProgress progress={0.5} buffer={0.75} reversed />

  <h>Secondary</h>
  <LinearProgress progress={0.5} accent />
</div>
```