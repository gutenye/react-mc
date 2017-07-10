### Design & API Documentation

- [Material Design guidelines: Grid lists](https://material.io/guidelines/components/grid-lists.html)
- [Material Components Web](https://material.io/components/web/catalog/grid-lists/)

### Usage

```
const GridList = require('./index').default;
<GridList>
  <GridList.Tiles>
    {[1, 2].map(v =>
      <GridList.Tile key={v}>
        <GridList.Tile.Primary>
          <GridList.Tile.PrimaryContent src="//via.placeholder.com/300x300" />
        </GridList.Tile.Primary>
        <GridList.Tile.Secondary>
          <GridList.Tile.Title>Title</GridList.Tile.Title>
        </GridList.Tile.Secondary>
      </GridList.Tile>
    )}
  </GridList.Tiles>
</GridList>
```