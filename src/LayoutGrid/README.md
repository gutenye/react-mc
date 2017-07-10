### Design & API Documentation

- [Material Design guidelines: Layout grid guidelines](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-grid)
- [Material Components Web](https://material.io/components/web/catalog/layout-grids/)

### Usage

```
const LayoutGrid = require('./index').default;
<LayoutGrid>
  <LayoutGrid.Inner>
    <LayoutGrid.Cell order="2"> a </LayoutGrid.Cell>
    <LayoutGrid.Cell order="1"> b </LayoutGrid.Cell>
    <LayoutGrid.Cell> c </LayoutGrid.Cell>
  </LayoutGrid.Inner>
</LayoutGrid>
```