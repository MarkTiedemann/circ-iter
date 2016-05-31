'use strict'

module.exports = arr => {
    let i = -1, len = arr.length - 1
    return () => i == len ? arr[i = 0] : arr[++i]
}
