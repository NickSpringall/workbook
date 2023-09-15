const info = `{
    "name": "max",
    "age": 40,
    "nationality": "Italian",
    "favouriteFood": [
        "pasta",
        "pizza",
        "gnocci"
    ],
    "livesInAustralia": true
}`

const max = JSON.parse(info);

console.log(max)

// => {
//   name: 'max',
//   age: 40,
//   nationality: 'Italian',
//   favouriteFood: [ 'pasta', 'pizza', 'gnocci' ],
//   livesInAustralia: true
// }