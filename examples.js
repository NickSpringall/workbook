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