// const info = `{
//     "name": "max",
//     "age": 40,
//     "nationality": "Italian",
//     "favouriteFood": [
//         "pasta",
//         "pizza",
//         "gnocci"
//     ],
//     "livesInAustralia": true
// }`

// const max = JSON.parse(info);

// console.log(max)

const max = {
  name: 'max',
  age: 40,
  nationality: 'Italian',
  favouriteFood: [ 'pasta', 'pizza', 'gnocci' ],
  livesInAustralia: true
}

const maxJSON = JSON.stringify(max)

console.log(maxJSON) 
// => {"name":"max","age":40,"nationality":"Italian","favouriteFood":["pasta","pizza","gnocci"],"livesInAustralia":true}
console.log(typeof(maxJSON)) 
// => string