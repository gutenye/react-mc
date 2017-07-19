### Design & API Documentation

- [Material Design guidelines: Typography](https://material.io/guidelines/style/typography.html)
- [Material Components Web](https://material.io/components/web/catalog/typography/)

### Usage

```
window.Typography = require('./index').default;
<Typography>
  <Typography.Display4>Display 4</Typography.Display4>
  <Typography.Display3>Display 3</Typography.Display3>
  <Typography.Display2>Display 2</Typography.Display2>
  <Typography.Display1>Display 1</Typography.Display1>
  <Typography.Headline>Headline</Typography.Headline>
  <Typography.Title>
    Title
    <Typography.Caption component='span'>Caption</Typography.Caption>
  </Typography.Title>
  <Typography.Subheading2>Subheading 2</Typography.Subheading2>
  <Typography.Subheading1>Subheading 1</Typography.Subheading1>
  <Typography.Body1>
    Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </Typography.Body1>
  <Typography.Body2>
    Body 2 text, calling something out.
  </Typography.Body2>
</Typography>
```

**With margin adjustments**

```
<Typography>
  <Typography.Display4 adjustMargin>Display 4</Typography.Display4>
  <Typography.Display3 adjustMargin>Display 3</Typography.Display3>
  <Typography.Display2 adjustMargin>Display 2</Typography.Display2>
  <Typography.Display1 adjustMargin>Display 1</Typography.Display1>
  <Typography.Headline adjustMargin>Headline</Typography.Headline>
  <Typography.Title adjustMargin>
    Title
    <Typography.Caption component='span'>Caption</Typography.Caption>
  </Typography.Title>
  <Typography.Subheading2 adjustMargin>Subheading 2</Typography.Subheading2>
  <Typography.Subheading1 adjustMargin>Subheading 1</Typography.Subheading1>
  <Typography.Body1 adjustMargin>
    Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  </Typography.Body1>
  <Typography.Body2 adjustMargin>
    Body 2 text, calling something out.
  </Typography.Body2>
</Typography>
```

