
// Defines car class
class Car {
    // constructor method assigns properties to the class
    // it is automatically called when creating an object and used to pass unique values to the new object
    constructor(brand) {
        // the 'this' keyword is used to refer to a newly created object
        // when creating a new car instance, the carname property will be assigned the brand value 
        // passed as an argument to the class constructor 

        // for example -
        // let newCar = new Car("Toyota") will create a new object instance "newCar" of the Car class with
        // the value "Toyota" will be assigned carname property
      this.carname = brand;
    }
    // Declaring present method - returns a string interpolating 'I have a ' and the carname of the object
    // Method will belong to each object as per a property
    present() {
      return 'I have a ' + this.carname;
    }
  }

// Defines Model class which inherits all properties and methods from the Car class
// Model is the child class and Car is the parent class
  class Model extends Car {
    constructor(brand, mod) {
        // super keyword referes to the parent class, used to invoke its constructor
        // in this case, the Car class' 'brand' constructor is invoked and a new Model object can be
        // passed a 'brand' argument and the instance will contain the 'carname' property
      super(brand);
    //   mod argument passed to the passed to the constructor will be assigned to the model property
      this.model = mod;
    }
    // show() method returns inherited present() method and interpolates it with ', it was made in ' and the model property for the object
    show() {
      return this.present() + ', it was made in ' + this.model;
    }
  }
  
//   define array variable with 3 string elements
  let makes = ["Ford", "Holden", "Toyota"]


// defines models variable and uses Array.from method to create a new array
// Array.from takes an array/array like or other iterable oject to convert to an array and a function to call on each element as arguments

// The Array constructor method as the first argument, 
    // In this case the Array constructor is passed an integer (40) so creates an array of 40 empty slots

// the second argument is the mapFn, an annonymous callback function, called on each element of the array
    // the mapFn is passed the current element (x, in this case empty and unused) and the index currently being processed (i)
    //  the function adds 1980 to the current element and this value is assigned to the index in the models array

  let models = Array.from(new Array(40), (x,i) => i + 1980)

  function randomIntFromInterval(min,max) { // min and max included
      return Math.floor(Math.random()*(max-min+1)+min);
  }
  
  for (model of models) {

    make = makes[randomIntFromInterval(0,makes.length-1)]
    model = models[randomIntFromInterval(0,makes.length-1)]

    mycar = new Model(make, model);
    console.log(mycar.show())
}