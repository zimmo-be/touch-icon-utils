# touch-icon-utils
Generate icons to all commonly accepted sizes and generate a proper HTML snippet. Inspired [this article](https://mathiasbynens.be/notes/touch-icons) by Mathias Bynens.

## Installation

```
npm install touch-icon-utils
yarn add touch-icon-utils
```

## Generate icons
Properly generate resized icons needed from a given image. The image must be at least 192x192.

```javascript
    const { iconsGenerator } = require("touch-icon-utils");
    iconsGenerator("path-to-source-image.png", "target-dir", [settings]);
```

## Generate HTML snippet
Render an HTML snippet for the icons you have just rendered (see above).

```javascript
    const { htmlSnippetGenerator } = require("touch-icon-utils");
    htmlSnippetGenerator([settings]);
```

## Settings
Passing settings is optional, default options are:
```json
{
    "appleSizes": [180, 152, 144, 120, 114, 76, 72],
    "precomposed": true
}
```
Note: Icons for sizes 57x57 and 192x192 are always rendered and don't need to be provided in `appleSizes`

## Licence
MIT © [Zimmo](https://zimmo.be)
