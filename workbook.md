## Q7 - Explain control flow, using an example from the JavaScript programming language

Control flow is the order in which lines or blocks of code are excecuted when run. By default, JavaScript is a sequentially executed programming language. This means that without encountering explicit logic or statements to alter the flow, code will be executed line by line, from top to bottom. 

Flow altering code can typically be broken down into two categories,iterative and conditional logic. Conditinal statements evaluates a set condition and either skip or execute code depending on a given condition being true or false. In JavaScript the main conditional statements are if/else/else if and switch stataments. 

If, else and else if statements work exactly as can be infered from the words themselves. An if statement will skip or run code depending on the truthy or falsy value of a condition. An if statement can be used by itself or in conjunction with else and else if statements. An else statement will run code only if the preceeding if statement has NOT run and will always execute if the if statement doesn't run. An else if statement works similarly except it will only run if both the preceeding if statement did not run and a further condition is met. 

A switch statement is an efficient way of executing similar logic where there are multiple possible outcomes for an expression to be tested against. A switch statement executes an expression only once, and will compare the result against multiple cases, executing code when a case matches or a default value when there are no matches.

Iterative statements, also known as loops, will repeat the same code until a condition is met. These can broadly be defined as for loops and while loops. While loops assess a condition and run some code if the condition is true, then reassess and repeat the processes until the condition is evaluated as false. 

A standard for loop consist of 3 expressions, the first expresion executes once at the start of the loop and typically defines a variable to be used by the loop logic. The second expression contains a conditional expression that defines when the loop repeats or stops. The third expression runs after each iteration of the loop.

The following example demonstrates these concepts, the code will run from top down, initialising the 2 variables and entering the for loop.

The for loop runs while the index variable is less than the length of someArray, 5 times in total. 

Inside the loop the code meets a conditional if statement. The condition is assesed (is the new array 3 elements long?) and uses the index value of the for loop to access the index within the someArray variable and pushes this value to the new array.

It's important to note that the loop will still run even after the if condition has been met, skipping the if statement (as it now returns false) and logging the array. 

```
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
```

Functions, which are essentially code that the code itself can call, must be defined and used with sequential logic, ie, they must be defined before they are called as the program will not have read the function definition if the program attempts to call it first.


## Q8 - Explain type coercion, using examples from the JavaScript programming language

Java Script is a dynamically typed language, this means that while they can be, data types do not need to be explicitly defined when declaring a variable. If no data type is explicitly defined, JavaScript will automatically define it for you. In much the same way, JavaScript can also change a variable's type automatically when needed to perform a task in the program. 

Implicit type coercion is the process of converting data between data types automatically without the programmer explicitly stating the conversion. While extremely useful to the developer as its use can create cleaner and simpler code to read, implicit type coercia is limitd in JavaScript and not all data types can be coerced. 

JavaScript will only implicitly coerce values into strings, numbers or boolean values. It is important to understand how JavaScript 'decides' which type to coerce into so unforseen issues do not arise. For example, in the following code, JS will convert the boolean value 'true' to the number value '1', use the mathematical + operator to add the number 3.

```
let someNum = 3
let someBool = true

someResult = someNum + someBool

console.log(someResult) // => 4
console.log(typeof(someResult)) // => number
```

wheras in the following code, providing 3 as a string value will result in both values being coerced into strings and the + concatinating them together.

```let someString = "3"
let someNum = 3
let someBool = true

someResult = someString + someBool

console.log(someResult) // => 3true
console.log(typeof(someResult)) // => string
```

JavaScript provides two equality comparison operators. If the developer wishes for JS to use type coercsion while performing the comparison the '==' (loose quality operator) can be used. Otherwise the '===' operator (known as the strict equality operator) only returns true when the data is both equal value and equal type.

for example the following code will log 'not the same type' because while the value is equal, the type is not.

``` 
let someNum = 3
let someString = "3"

if (someNum === someString) {
    console.log("the same type")
} else {
    console.log("not the same type")
} 

//  => 'not the same type'
```

by comparison, the following code will log 'the same type' because javascript used type coercion to compare equal data types

```
if (someNum == someString) {
    console.log("the same type")
} else {
console.log("not the same type")
}

// => "the same type"
```

Types can also be coerced explicitly in JavaScript. Typically using built in JavaScript methods. Using the example above, using explicit type conversion, the string can be coerced into a number or vice versa to control how the program exectues the operation. 

```
let someString = "3"
let someBool = true

someResult = Number(someString) + someBool

console.log(someResult) // => 4
console.log(typeof(someResult)) // => number
```

Similarly, the boolean value can also be coerced into a string

```
let someString = "3"
let someBool = true

someResult = Number(someString) + String(someBool)

console.log(someResult) // => 3true
console.log(typeof(someResult)) // => string
```

It is important to note that there are limits to type coercion and not all values can be, or will return a useable value once coerced. While the array in the following code contains values that can individually coerced into a number. Though,the array object itself cannot be.

```
let someArray = [6, 4, "6", [6,"230", true]]

console.log(Number(someArray)) // => NaN
```

While the String function will output the values contained within the array as a string 

```
let someArray = [6, 4, "6", [6,"230", true]]

console.log((String(someArray)))  // => 6,4,6,6,230,true
```

## Q9 - Explain data types, using examples from the JavaScript programming language

In order for a program to use and interact with some data within a variable, it must first know what that data is. Data types represent the clasifications of different kinds of data and inform a compiler or interpretor how to treat it. 

JavaScript uses the following primitive data types; null, undefined, boolean, string, number, bigint annd symbol. It has one complex data type - object.

Null and undefined are equal

## Q10 - Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

There are many ways to manipulate arrays in JavaScript. The primary way we ado this is through the use of built in JavaScript methods to achieve just about anything you would wish to do to an array.

for removing or deleting elements, the pop() and push() methods can be used to remove the last element or add a new element to the end respectivly -

```
let someArray = [0, 1, 2, 3, 4]

someArray.pop()
console.log(someArray) // => [ 0, 1, 2, 3 ]

someArray.push("new element")
console.log(someArray) // => [ 0, 1, 2, 3, 'new element' ]
```

the push() method is highly flexible as it can be used to add any data type or multiple elements to the array -

```
let someArray = [0, 1, 2, 3, 4]

someArray.push(["a","sub", "array"])
someArray.push(5,6,7,)
console.log(someArray) // => [ 0, 1, 2, 3, 4, [ 'a', 'sub', 'array' ], 5, 6, 7 ]
```

Some other examples of the many array manipulation methods are the slice() and splice() methods. The slice() method is used to extract the value of some elements from an array and returning them to a new array, it takes the start and finish index of the elements to be extracted and does not alter the original array. splice() works similarly but removes the elements from the original array.

```
let someArray = [0, 1, 2, 3, 4, 5, 6, 7]

let newArray = someArray.slice(2,5)

console.log(someArray) // => [ 0, 1, 2, 3, 4, 5, 6, 7 ]
console.log(newArray) // => [ 2, 3, 4 ]

let splicedArray = someArray.splice(2,5)

console.log(someArray) // =>[ 0, 1, 7 ]
console.log(splicedArray) // => [ 2, 3, 4, 5, 6 ]
```

the map() method iterates over each element, calling a callback function on each element and creating a new array of the returned values. This is extremely useful for many tasks, one example is creating an array of HTML elements from an array ready to pass onto the DOM - 

```
let someArray = ["pink", "blue", "green", "purple","yellow"]

let list = someArray.map((element) => {
    return '<li>' + element + '</li>'
})

console.log(list) // =>  

[
    '<li>pink</li>',
    '<li>blue</li>',
    '<li>green</li>',
    '<li>purple</li>',
    '<li>yellow</li>'
  ]
  ```

Array manipulation methods that do not alter the array, but rather make a copy (such as slice() and map()) are known as non-destructive methods. In contrast, destructive methods alter the array variable itself in some way (such as splice() and pop()).


It is important to understand how JavaScript treates the data in each array element in some manipulation methods. For example, the sort() method will sort an array in the following example, we can see how the method rearranges the elements into alphabetical order.

```
let someArray = ["orange", "apple", "watermelon", "lemon"]
console.log(someArray.sort()) 

// => [ 'apple', 'lemon', 'orange', 'watermelon' ]

```

If we attempt to use the same logic to sort a list of numbers we find that even though the elements are the number data type, the method coerces them into strings and arranges them into alphabetic order.

```
let someArray = [100, 2, 390, 28, 9, 6000]

console.log(someArray.sort()) // => [ 100, 2, 28, 390, 6000, 9 ]
console.log(typeof(someArray[0])) // => number
```

In order to use the sort method for the intended purpose of sorting by numerical order, it is necessary to pass a function to the sort method to compare the values.

```
let someArray = [100, 2, 390, 28, 9, 6000]

console.log(someArray.sort((num1, num2) => {
    return num1 - num2
})); // => [ 2, 9, 28, 100, 390, 6000 ]
```

This callback function subtracts one element from the if num1 is less than num2, it will return a negative value and num1 will be sorted below num2 and vice versa if num1 is greater than num2.

## Q11 Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

Objects can be manipulated in many ways. For example, elements can be accessed using dot or bracket notation, values and properties can be enumerated in severel ways and elements can be manipulated with operators.

Constructor functions can be used to create object instances - 

```
function Instrument(name, family, pitch, volume) {
    this.name = name
    this.family = family
    this.pitch = pitch;
    this.volume = volume;
}
let violin = new Instrument("violin", "String", "treble", "")
```

The values of the violin object can be manipulated by both dot and bracket notation

```
violin.volume = "soft"
console.log(violin) 

//  =>  Instrument {
    //     name: 'violin',
    //     family: 'String',
    //     pitch: 'treble',
    //     volume: 'soft'
//   }

violin["volume"] = "loud"
console.log(violin)

//  =>  Instrument {
    //     name: 'violin',
    //     family: 'String',
    //     pitch: 'treble',
    //     volume: 'loud'
    //   }
```

We can similarly use the same notation to add new properties to the object. Though only brackets notation can be used if the property name is not a valid JavaScript identified (ie, no spaces or hyphons, cannot be within another variable, cannot begin with a number ect.). In these cases, bracket notation must be used.

```
violin.timber = "maple"
violin["size of instrument"] = "small"
console.log(violin)

//  =>  Instrument {
    //     name: 'violin',
    //     family: 'String',
    //     pitch: 'treble',
    //     volume: 'loud',
    //     timber: 'maple',
    //     'size of instrument': 'small'
    //   }
```


The Object.keys() and Object.Values() methods return arrays of the keys or values of an object respectively.

```
console.log(Object.keys(violin)) 

// => [ 'name', 'family', 'pitch', 'volume', 'timber', 'size of instrument' ]

console.log(Object.values(violin))

//  => [ 'violin', 'String', 'treble', 'loud', 'maple', 'small' ]
```

