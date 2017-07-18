### Design & API Documentation

- [Material Design guidelines: Layout grid guidelines](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-grid)
- [Material Components Web](https://material.io/components/web/catalog/layout-grids/)

### Usage

- without span is 4.
- default span is 1 to 12. in phone value > 4 becomes 4. in tablet value > 8 becomes 8.
- tablet span is 1 to 8.
- phone span is 1 to 4.

```
const LayoutGrid = require('./index').default;
<LayoutGrid className='bg1'>
  <LayoutGrid.Inner>
    <LayoutGrid.Cell span='6' tablet='8' className='bg2 h100'>
      6 desktop <br/> 8 tablet <br/> 4 phone
    </LayoutGrid.Cell>
    <LayoutGrid.Cell span='4' tablet='6' className='bg2 h100'>
      4 desktop <br/> 6 tablet <br/> 4 phone
    </LayoutGrid.Cell>
    <LayoutGrid.Cell span='2' phone='4' className='bg2 h100'>
     2 desktop <br/> 2 tablet <br/> 4 phone
    </LayoutGrid.Cell>
  </LayoutGrid.Inner>
</LayoutGrid>
```

**Nested**

```
const LayoutGrid = require('./index').default;
<LayoutGrid>
  <LayoutGrid.Inner>
    <LayoutGrid.Cell className='bg1 h100'>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell span='6' className='bg2 h100'> Second Level </LayoutGrid.Cell>
        <LayoutGrid.Cell span='6' className='bg2 h100'> Second Level </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid.Cell>
    <LayoutGrid.Cell className='bg1 h100'> First Level </LayoutGrid.Cell>
    <LayoutGrid.Cell className='bg1 h100'> First Level </LayoutGrid.Cell>
  </LayoutGrid.Inner>
</LayoutGrid>
```

**Max width**
> Grid with max width (600px) and center alignment by default

```
const LayoutGrid = require('./index').default;
<LayoutGrid style={{maxWidth: 600}} className='bg1'>
  <LayoutGrid.Inner>
    <LayoutGrid.Cell className='bg2 h100'></LayoutGrid.Cell>
    <LayoutGrid.Cell className='bg2 h100'></LayoutGrid.Cell>
    <LayoutGrid.Cell className='bg2 h100'></LayoutGrid.Cell>
  </LayoutGrid.Inner>
</LayoutGrid>
```

**Fixed column width**

```
<LayoutGrid fixedColumnWidth style={{'--mdc-layout-grid-column-width-desktop': 84}} className='bg1' >
  <LayoutGrid.Inner>
    <LayoutGrid.Cell span='1' className='bg2 h100'></LayoutGrid.Cell>
    <LayoutGrid.Cell span='1' className='bg2 h100'></LayoutGrid.Cell>
    <LayoutGrid.Cell span='1' className='bg2 h100'></LayoutGrid.Cell>
  </LayoutGrid.Inner>
</LayoutGrid>
```

