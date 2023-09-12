let someObject = { 
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
}


function Instrument(family, pitch, volume) {
    this.family = family
    this.pitch = pitch;
    this.volume = volume;
}

let violin = new Instrument("String", "treble")

console.log (violin)

violin.volume = "soft"
console.log(violin) // =>  { family: 'String', pitch: 'treble', volume: 'soft' }

violin["volume"] = "loud"
console.log(violin)