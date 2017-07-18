### Design & API Documentation

- [Material Design guidelines: Cards](https://material.io/guidelines/components/cards.html)
- [Material Components Web](https://material.io/components/web/catalog/cards/)

### Usage

```
const Card = require('./index').default;
<Card className="w300">
  <Card.MediaItem size='3x' style={{marginTop: 0}} src="http://via.placeholder.com/300x200" />
  <Card.Primary>
    <Card.Title large>Title goes here</Card.Title>
    <Card.Subtitle>Subtitle here</Card.Subtitle>
  </Card.Primary>
  <Card.Actions>
    <Card.Action>Action 1</Card.Action>
    <Card.Action>Action 2</Card.Action>
  </Card.Actions>
</Card>
```

```
const Card = require('./index').default;
<Card className="w300">
  <Card.Primary>
    <Card.Title large>Title goes here</Card.Title>
    <Card.Subtitle>Subtitle here</Card.Subtitle>
  </Card.Primary>
  <Card.SupportingText>
    <doc-paragraph />
  </Card.SupportingText>
  <Card.Actions>
    <Card.Action>Action 1</Card.Action>
    <Card.Action>Action 2</Card.Action>
  </Card.Actions>
</Card>
```
