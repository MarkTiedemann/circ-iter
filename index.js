'use strict'

module.exports = arr => {
    if (typeof arr === 'string')
        arr = arr.split('')
    let pos = 0, len = arr.length
    return () => arr[pos++ % len]
}
