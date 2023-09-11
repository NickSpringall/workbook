// let someNum = 3
// let someString = "3"

// if (someNum === someString) {
//     console.log("the same type")
// } else {
//     console.log("not the same type")
// }
// // will log "not the sametype"



// if (someNum == someString) {
//     console.log("the same type")
// } else 
// console.log("not the same type")
// // will log "the same type"




let someString = "3"
let someNum = 3
let someBool = true

someResult = Number(someString) + String(someBool)

console.log(someResult) // => 4
console.log(typeof(someResult)) // => number



let someArray = [6, 4, "6", [6,"230", true]]

console.log((String(someArray)))  // => 6,4,6,6,230,true
