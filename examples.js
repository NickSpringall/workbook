let someBigint = 123456789123456789123n

console.log(typeof(someBigint)) // => bigint

bigintNumber = Number(someBigint)

console.log(bigintNumber) // => 123456789123456800000
console.log(someBigint) // => 123456789123456789123n
