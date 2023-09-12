let someArray = [0, 1, 2, 3, 4]
let newArray = []


for (index = 0; index < someArray.length; index ++) {


    if (newArray.length != 3) {
        newArray.push(someArray[index])
    }
    console.log(newArray) 
}

// => [ 0 ]
// [ 0, 1 ]
// [ 0, 1, 2 ]
// [ 0, 1, 2 ]
// [ 0, 1, 2 ]