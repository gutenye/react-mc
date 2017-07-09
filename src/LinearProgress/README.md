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