# scale

Scale a rectangle into bounds.

## Installation

```
npm install flip-it/scale
```

## API

### scale.fit(rect, bounds)

* `rect` (Object(width: number, height: number)): the rect to scale.
* `bounds` (Object(width: number, height: number)): the bounds to fit within.

```js
var scale = require('scale');

var rect = { width: 200, height: 300 };
var bounds = { width: 150, height: 200 };

scale.fit(rect, bounds);
// => Object(width: number, height: number)
```