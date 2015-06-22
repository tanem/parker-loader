# parker-loader

[![Build Status](https://travis-ci.org/tanem/parker-loader.png?branch=master)](https://travis-ci.org/tanem/parker-loader)
[![NPM version](https://badge.fury.io/js/parker-loader.svg)](http://badge.fury.io/js/parker-loader)

Output a stylesheet analysis report using [parker](https://github.com/katiefenn/parker) and [webpack](https://github.com/webpack/webpack).

## Installation

```
$ npm i parker-loader -D
```

__Note:__ [npm](https://npmjs.com) will deprecate [peerDependencies](https://github.com/npm/npm/issues/6565) on the next major release, so required dependencies like parker and webpack will have to be installed manually.

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

Specify the report format (defaults to markdown). See the [parker usage docs](https://github.com/katiefenn/parker/tree/master/docs/usage) for other format options.

```js
loaders: [
  {
    ...
    loader: 'raw!parker?format=csv&filename=stylesheet-analysis.csv'
  }
]
```

### `filename`

Specify the report filename (required).

```js
loaders: [
  {
    ...
    loader: 'raw!parker?filename=stylesheet-analysis.md'
  }
]
```

## Tests

```
$ npm test
```
