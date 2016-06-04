
# circ-iter

[![](https://travis-ci.org/MarkTiedemann/circ-iter.svg?branch=master)](https://travis-ci.org/MarkTiedemann/circ-iter)
[![](https://img.shields.io/node/v/circ-iter.svg)](https://www.npmjs.com/package/circ-iter)

**Simple circular Array and String iterator.**

## Installation

```
npm install circ-iter
```

## Usage

```js
/* With an Array */

const next = require('circ-iter')([1, 2, 3])

next() // => 1
    next() // => 2
        next() // => 3

next() // => 1
    next() // => 2
        next() // => 3

```

```js
/* With a String */

const next = require('circ-iter')('abc')

next() // => 'a'
    next() // => 'b'
        next() // => 'c'

next() // => 'a'
    next() // => 'b'
        next() // => 'c'

```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
