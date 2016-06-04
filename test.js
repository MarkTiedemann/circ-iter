'use strict'

const test = require('ava')

test('works with array', assert => {

    const next = require('.')([1, 2, 3])

    assert.is(next(), 1)
    assert.is(next(), 2)
    assert.is(next(), 3)
    assert.is(next(), 1)
    assert.is(next(), 2)
    assert.is(next(), 3)
    assert.is(next(), 1)
})

test('works with string', assert => {

    const next = require('.')('123')

    assert.is(next(), '1')
    assert.is(next(), '2')
    assert.is(next(), '3')
    assert.is(next(), '1')
    assert.is(next(), '2')
    assert.is(next(), '3')
    assert.is(next(), '1')
})
