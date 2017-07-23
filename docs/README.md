- [Github](https://github.com/gutenye/react-mc)
- [Theming Guide](https://material.io/components/web/docs/theming)
- [Implementation Details](https://github.com/gutenye/react-mc/blob/master/docs/Implementation Details.md)

## Install

```shell
$ yarn add react-mc
```

## Getting Started

**App.js**

```jsx
import Button from '@react-mc/button'

<Button raised primary>Hello</Button>
```

**mdc.scss**

```scss
$mdc-theme-primary: #9c27b0;
$mdc-theme-accent: #76ff03;
$mdc-theme-background: #fff;

@import "@material/button/mdc-button";
```

## Flow support

Flow support is out of box, internal, flow use `node_modules/react-mc/lib/index.js.flow` instead of `index.js` file.


## Other Projects implement material-components-web
> Learn from [others](https://github.com/search?q=topic%3Amaterial-components-web)

- [hardtack/react-material-components-web](https://github.com/react-mdc/react-material-components-web)
- [haoxins/react-mdc](https://github.com/haoxins/react-mdc)
- [mewa/react-material-components-web](https://github.com/mewa/react-material-components-web)
- [hartorn/react-material-web](https://github.com/hartorn/react-material-web)
- [reactivers/react-mcw](https://github.com/reactivers/react-mcw)
