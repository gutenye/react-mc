> If you like it, please support the development by star it in [Github](https://github.com/gutenye/react-mc)

## Philosophy

- **React Convention**: `<Select value onChange(e => e.target.value) />`
- **Performance**: use Foundation in react way as much as possible
- **Move fast**: As upstream changes fast, keep the code simple and keep the peace with the upstream.
- **Just a wrapper**: Keep upstream as close as possible, nothing more
- **Individual packages**: For each component, just like upstream
- **Flow Support**: Works out of box
- **Theme Support**: Like the upstream

See [Implementation Details](https://github.com/gutenye/react-mc/blob/master/docs/Implementation Details.md)

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
$mdc-theme-secondary: #76ff03;
$mdc-theme-background: #fff;

@import "@material/button/mdc-button";
```

## Theming Guide

See [Theming Guide](https://material.io/components/web/docs/theming)

## Flow support

Flow support is out of box, internal, flow use `node_modules/react-mc/lib/index.js.flow` instead of `index.js` file.

## Other Projects implement material-components-web
> Learn from [others](https://github.com/search?q=topic%3Amaterial-components-web)

- [hardtack/react-material-components-web](https://github.com/react-mdc/react-material-components-web)
- [haoxins/react-mdc](https://github.com/haoxins/react-mdc)
- [mewa/react-material-components-web](https://github.com/mewa/react-material-components-web)
- [hartorn/react-material-web](https://github.com/hartorn/react-material-web)
- [reactivers/react-mcw](https://github.com/reactivers/react-mcw)
