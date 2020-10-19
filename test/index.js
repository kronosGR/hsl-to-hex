const hsl = require('../')
const { test } = require('tap')

test('pure white', ({ is, end }) => {
  const expected = '#ffffff'
  var actual = hsl(0, 100, 100)
  var it = `
    max saturation and luminosity should return pure white
    `
  is(actual, expected, it)
  end()
})

test('medium gray', ({ is, end }) => {
  var expected = '#808080'
  var actual = hsl(0, 0, 50)
  var it = `
    0% saturation, 50% luminosity should be medium gray
    `
  is(actual, expected, it)
  end()
})

test('hure-red', ({ is, end }) => {
  var expected = '#ff0000'
  var actual = hsl(0, 100, 50)
  var it = `
    0deg should be red
    `
  is(actual, expected, it)
  end()
})

test('hue-blue', ({ is, end }) => {
  var expected = '#0000ff'
  var actual = hsl(240, 100, 50)
  var it = `
    240deg should be blue
    `
  is(actual, expected, it)
  end()
})
