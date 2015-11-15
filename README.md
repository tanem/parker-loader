# parker-loader

[![build status](https://img.shields.io/travis/tanem/parker-loader/master.svg?style=flat-square)](https://travis-ci.org/tanem/parker-loader)
[![npm version](https://img.shields.io/npm/v/parker-loader.svg?style=flat-square)](https://www.npmjs.com/package/parker-loader)
[![npm downloads](https://img.shields.io/npm/dm/parker-loader.svg?style=flat-square)](https://www.npmjs.com/package/parker-loader)

Output a stylesheet analysis report using [parker](https://github.com/katiefenn/parker) and [webpack](https://github.com/webpack/webpack).

## Installation

```
$ npm install parker-loader --save-dev
```

## Usage

```js
var css = require('raw!parker!./styles.css');
```

Or within the webpack config:

```js
module: {
  loaders: [{
    test: /styles\.css$/,
    loader: 'raw!parker?format=md&filename=stylesheet-analysis.md'
  }]
}
```

## Options

### `format`

Specify the report format (defaults to `markdown`). See the [parker usage docs](https://github.com/katiefenn/parker/tree/master/docs/usage) for other format options.

```js
loaders: [
  {
    ...
    loader: 'raw!parker?format=csv&filename=stylesheet-analysis.csv'
  }
]
```

### `filename`

Specify the report filename (defaults to `[name]-analysis.md`).

```js
loaders: [
  {
    ...
    loader: 'raw!parker?filename=../parker-reports/[name].md'
  }
]
```

## Tests

```
$ npm test
```

## License

MIT
