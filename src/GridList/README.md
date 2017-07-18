### Design & API Documentation

- [Material Design guidelines: Grid lists](https://material.io/guidelines/components/grid-lists.html)
- [Material Components Web](https://material.io/components/web/catalog/grid-lists/)

### Usage

```
const GridList = require('./index').default;
<GridList>
  <GridList.Tiles>
    {_.times(8).map(v =>
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

**with 1px gutter**

```
const GridList = require('./index').default;
<GridList tileGutter1>
  <GridList.Tiles>
    {_.times(4).map(v =>
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

**Image only**

```
const GridList = require('./index').default;
<GridList>
  <GridList.Tiles>
    {_.times(4).map(v =>
      <GridList.Tile key={v}>
        <GridList.Tile.Primary>
          <GridList.Tile.PrimaryContent src="//via.placeholder.com/300x300" />
        </GridList.Tile.Primary>
      </GridList.Tile>
    )}
  </GridList.Tiles>
</GridList>
```

**Header caption**

```
const GridList = require('./index').default;
<GridList headerCaption>
  <GridList.Tiles>
    {_.times(4).map(v =>
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

**Footer caption with icon**

```
const GridList = require('./index').default;
<GridList withIconAlign='end'>
  <GridList.Tiles>
    {_.times(4).map(v =>
      <GridList.Tile key={v}>
        <GridList.Tile.Primary>
          <GridList.Tile.PrimaryContent src="//via.placeholder.com/300x300" />
        </GridList.Tile.Primary>
        <GridList.Tile.Secondary>
          <GridList.Tile.Title>Title</GridList.Tile.Title>
          <GridList.Tile.Icon className='material-icons'>star_border</GridList.Tile.Icon>
        </GridList.Tile.Secondary>
      </GridList.Tile>
    )}
  </GridList.Tiles>
</GridList>
```