# PostHTML-CSS-Expand-Polymer [![npm version](https://badge.fury.io/js/posthtml-css-expand-polymer.svg)](https://badge.fury.io/js/posthtml-css-expand-polymer)

A fork of the [posthtml-style-expantion](https://github.com/renyamizuno/posthtml-style-expantion) plugin by [renyamizuno](https://github.com/renyamizuno).
Corrected to work with WebComponents.


## Install

```
npm i -D posthtml-css-expand-polymer
```

## Usage

```js
const posthtml = require('posthtml')

posthtml([require('posthtml-css-expand-polymer')({ root: './', encoding: 'utf-8' })])
  .process('<link expand="true" href="/path/index.css" rel="stylesheet">')
  .then( result => console.log(result.html))
```

### Options
`root`: Root folder

`encoding`: Default `utf-8`

