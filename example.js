var hsl = require('./')
var hue = 123
var saturation = 40
var luminosity = 60
var hex = hsl(hue, saturation, luminosity)
console.log(hex) // #70c282
