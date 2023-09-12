let someObject = { 
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}


function Instrument(name, family, pitch, volume) {
    this.name = name
    this.family = family
    this.pitch = pitch;
    this.volume = volume;
}

let violin = new Instrument("violin", "String", "treble")

// console.log (violin)

violin.volume = "soft"
// console.log(violin) 

// =>  Instrument {
    //     name: 'violin',
    //     family: 'String',
    //     pitch: 'treble',
    //     volume: 'soft'
//   }

violin["volume"] = "loud"
// console.log(violin)

// Instrument {
//     name: 'violin',
//     family: 'String',
//     pitch: 'treble',
//     volume: 'loud'
//   }

violin.timber = "maple"
violin["size of instrument"] = "small"
// console.log(violin)

// Instrument {
//     name: 'violin',
//     family: 'String',
//     pitch: 'treble',
//     volume: 'loud',
//     timber: 'maple',
//     size: 'small'
//   }

console.log(Object.keys(violin)) 
// => [ 'name', 'family', 'pitch', 'volume', 'timber', 'size of instrument' ]

console.log(Object.values(violin))
//  => [ 'violin', 'String', 'treble', 'loud', 'maple', 'small' ]