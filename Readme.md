# hsl-to-hex
Concert HSL color to RGB colors in hex format  

## Install
    npm instal --save @kronosgr/hsl-to-hex  

## API
    require('hsl-to-hex') => Function  
    hsl(hue, saturation, luminosity) => String  

## Example
    var hsl = require('hsl-to-hex')
    var hue = 123
    var saturation = 40
    var luminosity = 60
    var hex = hsl(hue, saturation, luminosity)
    console.log(hex) // #70c282


## License
ISC
