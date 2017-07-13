- [Github](https://github.com/gutenye/react-mc)
- [Theming Guide](https://material.io/components/web/docs/theming)

```shell

$ yarn add react-mc

```

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

