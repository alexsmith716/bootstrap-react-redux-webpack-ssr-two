# bootstrap-react-redux-webpack-ssr-two


## Overview:

App is a continuation of repo 'bootstrap-react-redux-webpack-ssr-one'.


### To-Do:

  1) Implement `eslint`, `chai` && `jest`


### PORTS:

  Server API (api/api.js):
    Port: 3030

  Server Static && init delegate `react-router` rendering (server.js):
    Port: 3000

  Server Dev (webpack-serve):
    Port: 3001


### Webpack-Serve (references):

  https://github.com/webpack-contrib/webpack-serve
  https://github.com/webpack-contrib/webpack-hot-client
  https://github.com/webpack/webpack-dev-middleware#options
  https://github.com/koajs/cors


### Nodemon:

  https://github.com/remy/nodemon
  By default nodemon monitors the current working directory. 
  *** If you want to take control of that option, use the --watch option >>>> TO ADD SPECIFIC PATHS <<<<


### Webpack development server (webpack-hot-client):


#### Set options for webpack-hot-client:

* CLI: 'webpack-serve --hot-client --config webpack.config.client.development.js'


### Flow:

* A static type checker

* https://flow.org/en/docs/config/ignore/
* https://flow.org/en/docs/config/include/

* Flow needs to know which files to read and watch for changes. This set of files is determined by taking all `[include]` files and excluding all the `[ignore]` files.
* Including a directory recursively includes all the files under that directory.
* The project root directory (where your `.flowconfig` lives) is automatically included.
* Each line in the include section is a path to include. 
* These paths can be relative to the root directory or absolute, and support both single and double star wildcards.

* Ignores are processed AFTER includes. If you both include and ignore a file it will be ignored.

* Flow CLI: Using the command `flow` will type-check your current directory if the `.flowconfig` file is present. 


### Of Note:

* decorators make it possible to annotate and modify classes and properties at ru time
* a higher-order component (HOC aka 'enhancers') refers to a function that accepts a single React component and returns a new React component
* a component transforms props into UI, a HOC transforms a component into another component

* const EnhancedComponent = hoc(BaseComponent);
* import { Provider as ReduxProvider } from 'react-redux';
* const Provider = withContext(ReduxProvider);

/** react-bootstrap (Bootstrap 3 components built with React) https://react-bootstrap.github.io/
 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
 * The children of `<Portal/>` component will be appended to the `container` specified.
 */


### JS Refresher +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++:

#### Object-Oriented Programming:

* an object is a logically related collection of data and functionality

* A class refers to a generic/abstract thing (a car)
* An instance refers to a specific/concrete thing (a specific car)
* A piece of functionality (accelerate) is a method
* A piece of functionality that is related to the class, but doesn't refer to a specific instance, is a class method (car VIN)
* When a 'car' instance is first created, its 'constructor' runs. The constructor 'initializes' the object instance

* OOP gives a framework for hierarchically categorizing classes
* A 'vehicle' 'class' would be a 'superclass' of 'car'.
* A 'superclass' may have multiple subclasses: ('vehicle' >>> ('car', 'boat'))
* A 'subclass' may have multiple subclasses ('boat' >>> ('sailboat', 'rowboat'))

* ES6 introduces convenient syntax for creating classes
* ES6 also introduces the data structures: 'maps' and 'sets' && 'WeakMap' and 'WeakSet'


`// create new class called 'Car'
class Car { 
  constructor() {}
}`


`// create 2 instances instance of 'Car'
const car1 = new Car();
const car2 = new Car();`


`'instanceof' operator evaluates if a given object is an instance of a given class
car1 instanceof Car // true 
car1 instanceof Boat // false
car2 instanceof Array // false`


`// give Car class 'data' (make, model), and 'functionality' (shift)
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.userGears = ['P', 'N', 'R', 'D'];
        this.userGear = this.userGears[0];
    }
    shift(gear) {
        if (this.userGears.indexOf(gear) < 0) {
          throw new Error(`Invalid gear: ${gear}`);
        }
        this.userGear = gear;
    }
}`

* 'this' keyword refers to the instance the method was invoked on
* it is like a 'placeholder' for a specific instance

* the 'constructor' is called implicitly (automatically) when creating a new object
* a method 'shift' was created
* method 'shift' takes a single parameter 'gear' which modifies property 'userGear'

* PROBLEM - what if `car1.userGear = 'X'` (what if 'userGear' is directly set to 'X' which does not exist) 
* the proper way to set the value of property 'userGear' is through the parameter 'gear' of method 'shift'

* OO languages provide mechanisms to control the access level of class/object methods and properties
* ES6 Javascript can enforce 'controlled access' to an 'object' through data type 'WeakMap'
* the 'controlled access' is protection by 'scope' ('public' or 'private' access to properties of an object)
* if you can't access something you cannot modify it

* About 'WeakMap' ++++++++++++++++++++++++++++++++++++++++++++++++
* 'WeakMap' keys must be objects
* Keys in a 'WeakMap' can be garbage-collected
* A 'WeakMap' cannot be iterated or cleared
* You can’t get an overview of the contents of a WeakMap
* because of above properties, 'WeakMap' can store private keys in object instances

* ====================================================================================================================

* https://blog.kevinchisholm.com/javascript/javascript-closures-basics/
* https://blog.kevinchisholm.com/javascript/javascript-closures-getters-setters/
* https://blog.kevinchisholm.com/javascript/difference-between-scope-and-context/

* JavaScript functions always (always) retain a reference to any variables that are in-scope when they are defined
* so what about when a function is defined inside another function

* That is where the power of closures starts to take place. 
* When a function is defined within another function, it has access to any variables that are in-scope at the time of definition


`var drink = "wine";
var foo = function() {
   var drink = "beer";
   return function() {
      return drink;
   };
};
var bar = foo();
console.log( drink );  //wine
console.log( bar() );  //beer`


For above, create a global variable named “drink” and set it equal to “wine”. 
Next we have a function “foo”, that returns another function. 
When we say: ‘var bar = foo()’, we are assigning the value that foo returns to bar.

Since foo returns a function, then bar is now a function. 
Because the function that has been assigned to bar is defined inside of foo, it has access to foo. 
This means that in our case, bar returns a private variable that lives inside of foo. 
That variable inside of foo named “drink”, has been set to “beer”. 
So, in the global context, “drink” equals “wine” and in the context of foo, “drink” equals “beer”.

The end result is that when we pass the variable “drink” to the console, it is “wine”, because in the global scope, “drink” is equal to “wine”. 
But when we pass “bar()” to the console, we get “beer”. 
That is because “bar()” is a function, it returns a variable named “drink” and because “Bar()” was defined inside of foo, it returns the first “drink” it finds, which is private to “foo()” and it is equal to “beer”.

At the most basic level, this is how closures work.

* 'getting' && 'setting' a private variable ++++++++++++++++++++++++++++++++++++++++++++++++++++++=

`var drink = 'wine';
var foo = function() {
  var drink = 'beer';
  return {
     getDrink: function(){ return drink },
     setDrink: function(newDrink){ drink = newDrink; return drink; }
  };
};
var bar = foo()
console.log( drink );                   // wine
console.log( bar.getDrink() );          // beer
console.log( bar.setDrink("juice") );   // juice
console.log( bar.getDrink() );          // juice`

* ===================================================================================================================

* below is modified 'car' class making 'userGear' property private (eliminating/hiding access to 'gear')
* the 'car' class is enclosed through an 'immediately invoked function expression' (IIFE)
* the result is a 'closure' that prevents exposure of the local/private scope to the global/public scope
* basically wrapping one function with another

* When that returned function is assigned to a variable, as long as that variable is alive, it (a function) has access to the context of the function that wraps it. This means that the outer (or “wrapping”) function can contain a private member, but the wrapped function has access to it

* 'WeakMap' provides the getters and setters to access the encapsulated 'userGear'

`const Car = (function() {
  const carProps = new WeakMap();
  class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
      this._userGears = ['P', 'N', 'R', 'D'];
      carProps.set(this, {
        userGear: this._userGears[0]
      });
    }
    get userGear() {
      return carProps.get(this).userGear;
    }
    set userGear(value) {
      if (this._userGears.indexOf(value) < 0) throw new Error(`Invalid gear: ${value}`);
      carProps.get(this).userGear = value;
    }
    shift(gear) {
      this.userGear = gear;
    }
  }
  return Car;
})();`


### Classes Are Functions:

* this

`function Car(make, model) {
  this.make = make;
  this.model = model;
  this._userGears = ['P', 'N', 'R', 'D'];
  this._userGear = this.userGears[0];
}`

* is equal to this 

`class Es6Car {} 
function Es5Car {} 
> typeof Es6Car // 'function'
> typeof Es5Car // 'function'`


### The Prototype:

* When you refer to methods that are available on instances of a class, you are referring to prototype methods
* the shift method on 'Car' instances is a prototype method
* can be written as 'Car.prototype.shift'

* What’s important about the 'prototype' is a mechanism called 'dynamic dispatch' ('method invocation')
* JavaScript performs 'dynamic dispatch' using the 'prototype chain'
* When accessing a property or method on an object, if it doesn’t exist, JavaScript checks the object’s prototype to see if it exists there
* Because all instances of a given class share the same prototype, if there is a property or method on the prototype, all instances of that class have access to that property or method
* defining a method or property on an instance will override the version in the prototype
* JavaScript first checks the instance before checking the prototype

`const car1 = new Car();
const car2 = new Car();
car1.shift === Car.prototype.shift; // true
car1.shift('D');
car1.shift('d'); // error
car1.userGear; // 'D'
car1.shift === car2.shift // true
// -----------------------------------------------------------------------
// override shift() method on car1
car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
car1.shift === Car.prototype.shift; // false
car1.shift === car2.shift; // false
car1.shift('d');
car1.userGear; // 'D'`


#### Static Methods:

* https://javascript.info/class

* 'shift()' method is considered an 'prototype method'. it is designed to be useful against a specific instance
* a static methods (class method), do not apply to a specific instance
* in a static method, 'this' is bound to the class itself (though usually it is the name of the class)
* Static methods perform generic tasks that are related to the class, but not any specific instance
* following the 'car' class, the 'car' 'VIN' would logically apply to the class and not a 'car' instance
* a 'vin()' method would be considered a 'Static' method (since it will apply to all 'vehicles', hence all 'cars', 'boats')
* Static methods are used to perform generic tasks that are related to the whole class, but not class instances


#### Inheritance:

* the concept of prototype shows a type of inheritance:
* when you create an instance of a class, it inherits whatever functionality is in the class’s prototype
* if a method isn’t found on an object’s prototype, it checks the prototype’s prototype
* a prototype chain is established upon class instantiation
* javascript will walk up the prototype chain until it finds a prototype that satisfies the request 
* if it can find no such prototype, it will finally error out
* (i did not know this!!) -------------------------------------

* long story short below

`class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicle created");
  }
  addPassenger(p) {
    this.passengers.push(p);
  }
}
class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car created");
  }
  deployAirbags() {
    console.log("BWOOSH!");
  }`

* 'extends' keyword: syntax marks Car as a subclass of 'Vehicle'
* call to 'super()': a special function in JavaScript that invokes the superclass’s constructor
* 'super()' function call is required for subclasses
* instances of the 'Car' class can access all methods of the 'Vehicle' class, but not the other way around
* a 'new Vehicle()' instance does not have a 'deployAirbags()' method (unless that subclass instance posess a 'deployAirbags()' 'prototype' method)

#### Polymorphism:

* a suclass instance is a member of both own its class and any superclasses
* in javascript, the code can take the form of 'duck typing'
* 'duck typing': 'if it walks like a duck, and quacks like a duck...it’s probably a duck.'
* with 'Car' superclass/subclass example
* if an object has a 'deployAirbags' method it probably is an instance of 'Car' class
* testing an objects 'instanceof' operator against a class and then making an instance type assumption based on that evaluation


#### Assignment Operators:

* assigns a value to a variable, property, or array element (something that can hold a value)

`let v, v0;`
`v = v0 = 9.8;`

`const nums = [3,5,15,7,5];`

`while( (n = nums[i]) < 10, i++ < nums.length ) {
  console.log('Number less than 10: ${n}.'); 
}
console.log('Number greater than 10 found: ${n}.');
console.log('${nums.length} numbers remain.');`

* concept super obvious && been used forever

#### Assignment Operators:

#### Destructuring Assignment (ES6):

* Object Destructuring ++++++++++++++++++++++++++++++++++++++

* When destructuring an object, variable names must match property names in the object
* take an object or an array, and 'destructure' it into individual variables

`// basic object
const obj = { b:2, c:3, d:4 };`

`// destructuring assignment
const {a, b, c} = obj;`

`a; // undefined: there was no property 'a' in obj
b; // 2
c; // 3
d; // reference error: "d" is not defined`

* Array Destructuring ++++++++++++++++++++++++++++++++++++++

* works on any iterable object (both arrays && objects)
* When destructuring the iterable object, any names can be assigned (in order) to the elements of the array

`// basic array
const arr = [1, 2, 3, 4, 5];`

`let [x, y] = arr;
x; // 1
y; // 2
z; // error: 'z' hasn't been defined
// 'x' is assigned the value of the first element
// 'y' is assigned the value of the second element
// all elements past 'y' are discarded`


#### Destructuring Arguments:


#### Default Arguments Syntax:


#### Scope Versus Existence:


#### Global Scope:


#### Block Scope:


#### Array Operations: map and filter:


#### Array: reduce:


#### Object Rest/Spread Properties:


#### Using Object Spread Operator:
