let someArray = [100, 2, 390, 28, 9, 6000]

console.log(someArray.sort((num1, num2) => {
    return num1 - num2
})); // => [ 2, 9, 28, 100, 390, 6000 ]