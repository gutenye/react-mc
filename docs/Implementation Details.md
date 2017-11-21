# Implementation Details

## React Conventions

### Form controls

**value/onChange and checked/onChange**

```html
<Textfield value onChange(e)>  e.target.value
<Checkbox checked onChange(e)> e.target.checked
<Switch checked onChange(e)> e.target.checked

<!--Does not have a target, so mock one -->

<IconToggle checked onChange(e)> e.target.checked 
<Select value onChange(e)> e.target.value
<Slider value onChange(e)> e.target.value
```

**open/onClose**

```html
<Dialog open onClose>
<Menu open onClose>
<Drawer.Persistent open onClose>
<Drawer.Temporary open onClose>
```

### The component prop

As upstream's element can be any tagName, in React, we use `component` prop. 

```html
<Button component='a'>Hello</Button> -> <a>Hello</a>

<Button component={Link}>Hello</Button> -> <Link>Hello</Link>
```

### Class name modifiers naming conventions

Normally, `<Toolbar flexibleDefaultBehavior>` -> `<div class="mdc-toolbar--flexible-default-behavior">`

Some exceptions are:

- `<FormField align='end'>`    -> `<div class="mdc-form-field--align-end">`
- `<List theme='dark'>` -> `<div class="mdc-list--them-dark>`
- `<Card.MediaItem size='2x'>`      -> `<div class="mdc-card__media-item--2x>`

### Component naming conventions

| Upstream                  |   Current           |
|---------------------------|---------------------|
| mdc-dialog                | Dialog              |
| mdc-dialog__header        | Dialog.Header       |
| mdc-dialog__header__title | Dialog.Header.Title |
|                           |                     |
| mdc-card                  | Card                |
| mdc-card__media-item      | Card.MediaItem      |
|                           |                     |
| mdc-list                  | List                |
| mdc-list-item             | List.Item           |
| mdc-list-group            | List.Group          |
|                           |                     |
| mdc-persistent-drawer     | Drawer.Persistent   |
| mdc-permanent-drawer      | Drawer.Permanent    |

### Multiple Compnents vs Single Component


**Multiple Components**

```html
<Card>
  <Card.Primary>
    <Card.Title>Title</Card.Title>
    ...

->

<div class="mdc-card">
  <section class="mdc-card__primary">
    <h1 class="mdc-card__title">Title</h1>
    ...
```

Each component represtent a single DOM element, very flexible.

**Single Component**

```html
<Textfield label='Name' />

->

<div class="mdc-textfield">
  <input class="mdc-textfield__input" />
  <label class="mdc-textfield__label">Name</label>
</div>
```

One compnent contains all needed DOM elements, easy to use.

### Form Controls

`<Textfield required ... />` rest props are passed to `<input class="mdc-textfield__input"/>` instead of root `<div class="mdc-textfield">. So that everything (validation, name, id, for) just works.

## Difference from upstream

Two event: onCancel, onClose needed for select. foundtion use onCancel. I use onClose.
- React no passive event(https://github.com/facebook/react/issues/6436): use AddEventListener, otherwise get [react-event-poolling](https://fb.me/react-event-pooling) error. Example: Ripple
- React no `onPointerDown` event(https://github.com/facebook/react/issues/499): use addEventListener. Example: Ripple

### Event System

**Listen vs onClick**

React can not register multiple times, it uses onCancel, while upstream use listen and emit. For example, Menu has onCancel (from upstream), onClose (just alias to onCancel), and Select founation is using Menus's onCancel, so I need to use menus's onClose.

**Event bubbles**

In React

```js
class Hello extends React.Component {
  render() {
    return <div onClick={() => console.log('1 div')}>hello</div>
 }
 componentDidMount() {
    document.body.addEventListener('click', () => console.log('2 body'))
 }
```

div click is called before body click. For react register all events in document.body

this affects Select component. 

1. Menu register a document.body click event to close the menu.
2. Select register a root click event: check menu.isOpen() to open and close menu.


