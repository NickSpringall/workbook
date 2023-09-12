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


Functions are handled differently to the 


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



