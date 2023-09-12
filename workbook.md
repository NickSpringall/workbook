## Q7 - Explain control flow, using an example from the JavaScript programming language

Control flow is the order in which a program excecutes a block of code. By default, JavaScript is a sequentially executed programming languag. This means that without encountering explicit logic to alter the flow, code will be executed line by line, from top to bottom. 





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



