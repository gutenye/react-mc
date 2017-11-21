## Upgrade

```
$ yarn upgrade material-components-web@^0.25
$ edit docs/template.html
	../material-components-web@0.25/..

1. Check CHANGELOG.md
2. check each README file on the Features link
```

## HACK

Read docs/Implementation Details.md

```
getDefaultFoundation() {
	// use querySelector if drawer is in this.props.children, otherwise use ref
	this.drawer = this.root_.querySelector(MDCTemporaryDrawerFoundation.strings.DRAWER_SELECTOR)

	registerInteractionHandler: helper.registerHandler('rootProps', this)
	registerInputFocusHandler: helper.registerHandler('inputProps', this, 'focus')

	addClassToHelptext: helper.addClass('helptextProps', this)
	setHelptextAttr: helper.setAttr('helptextProps', this)

render() {
	<Component
		ref={v => (this.root_ = v)}
```


