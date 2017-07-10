### Design & API Documentation

- [Material Design guidelines: Progress & activity](https://material.io/guidelines/components/progress-activity.html)
- [Material Components Web](https://material.io/components/web/catalog/linear-progress/)

### Usage

```
const LinearProgress = require('./index').default;
<div>
  <p>
    <LinearProgress progress={0.5} />
    Determinate
  </p>
  <p>
    <LinearProgress progress={0.5} indeterminate />
    Indeterminate
  </p>
  <p>
    <LinearProgress progress={0.5} buffer={0.75} />
    Buffer
  </p>
  <p>
    <LinearProgress progress={0.5} reversed />
    Reversed
  </p>
  <p>
    <LinearProgress progress={0.5} indeterminate reversed />
    Indeterminate Reversed
  </p>
  <p>
    <LinearProgress progress={0.5} buffer={0.75} reversed />
    Buffer Reversed
  </p>
  <p>
    <LinearProgress progress={0.5} accent />
    Accent
  </p>
</div>
```