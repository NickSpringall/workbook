## Q8 - Explain type coercion, using examples from the JavaScript programming language

Type coercion is the process of converting data between data types automatically without the programmer explicitly stating the conversion. 

JavaScript provides two equality comparison operators. If the developer wishes for JS to use type coercsion while performing the comparison the '==' can be used. Otherwise the '===' operator only returns true when the data is both equal value and equal type

for example the following code will log 'not the same type' because while the value is equal, the type is not.

``` 
let someNum = 3
let someString = "3"

if (someNum === someString) {
    console.log("the same type")
} else {
    console.log("not the same type")
}
```

by comparison, the following code willlog 'the same type' because javascript used type coercion to compare equal data types

```
if (someNum == someString) {
    console.log("the same type")
} else 
console.log("not the same type")
// will log "the same type"
```
