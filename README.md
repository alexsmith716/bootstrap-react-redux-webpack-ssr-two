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



#### Functions:

* A function is a self-contained collection of statements that run as a single unit: a subprogram
* Functions are central to javascript's power
* Every function has a body; the collection of statements that compose the function
* calling a function executes the body (aka run, execute, invoke, dispatch)
* a function is an expression ( expressions resolve to a value )
* a function call resolves to a value which is returned
* the return keyword immediately terminates the function and returns the specified value
* the function call resolves to the returned value
* A function can return any type of value


* Functions are objects and can be passed around and assigned just like any other object

`function getGreeting() { 
  return 'Hello world!';
}`

`getGreeting();  // calling the function - an 'identifier' followed by '() - parentheses'`
`getGreeting;    // referencing the function. it is not invoked`


* ALOT can be done by REFERENCING a Function


* For example, you can assign a function to a variable, which allows you to call the function by another name:

`const f = getGreeting;
f(); // 'Hello world!'`


* Or assign a function to an object property:

`const o = {};
o.f = getGreeting;
o.f(); // 'Hello world!'`


* -------------------------------------------------------------------------


* Or add a function to an array:

`const arr = [1, 2, 3];
arr[1] = getGreeting;
arr[1]();               // 'Hello world!'
`


* -------------------------------------------------------------------------


* about this bit of code:


`arr[1]();   // 'Hello world!'`

* if javascript encounters parentheses that follow a value, the value is assumed to be a function, and that function is called


* -------------------------------------------------------------------------


* about this bit of code:


`const a = 5, b = 0;
function avg(a, b) { 
  return (a + b)/2;
}
avg(a, b);
`

* `avg(a, b)`: 'a' && 'b' are the function 'arguments' ('parameters')
* The variables 'a' and 'b' are separate, distinct variables from the arguments 'a' and 'b' in the function avg
* variables can share the same as arguments
* arguments/parameters (are like variables, but specific to the function body)
* arguments/parameters exist only in the function
* arguments/parameters exist only in the function, even if they have the same name as variables outside of the function

* when a function is called, the function arguments receive the values passed in, not the variables themselves


* -------------------------------------------------------------------------


* about this bit of code:


`function f(x) {
  console.log(`inside f: x = ${x}`);
  x = 5;
  console.log(`inside f: x = ${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x = ${x}`);
f(x);
console.log(`after calling f: x = ${x}`);
`

* logged output from above --------------------------------------
`before calling f: x = 3
inside f: x = 3
inside f: x = 5 (after assignment)
after calling f: x = 3
`


* assigning a value to 'x' inside a function doesn't affect the variable 'x' that's outside the function
* arguments/parameters and variables are two distinct entities that may happen to have the same name

* when assigning to an argument inside a function, there is no effect on any variables outside of the function

* the variable value 'x' is a PRIMITIVE value type so a change was made to outside variable 'x' value

* example of working with 'Primitives' inside and outside a function


* -------------------------------------------------------------------------


* about this bit of code:


`function f(o) {
  o.message = `set in f (previous value: '${o.message}')`;
}
let o = {
  message: "initial value"
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);
`

* logged output from above --------------------------------------
`before calling f: o.message="initial value"
after calling f: o.message="set in f (previous value: 'initial value')"
`

* 'f' modified 'o' within the function, and those changes affected the object 'o' outside of the function
* it is possible to modify an 'object type' from within a function
* objects modified by functions retain that modification when returned outside the function

* the object 'o' inside the function is separate and distinct from the object 'o' outside of the function
* the object 'o' inside the function AND the object 'o' outside function BOTH refer to the same object

* the variable value 'o' is a OBJECT value type so a change was made to outside variable 'o' value


* -------------------------------------------------------------------------


#### Primitive Types and Objects:

* WHAT IS GOING ON with the above variable and object examples
* the difference is between between 'primitives' and 'objects'
* In JavaScript, values are either 'primitives' or 'objects'


* PRIMITIVE TYPES (STRING, NUMBER, BOOLEAN) are 'IMMUTABLE'

* 'IMMUTABLE': (unchanging over time or unable to be changed)


* -------------------------------------------------------------------------


* about this bit of code:

`let str = 'hello';
str = 'world';`


* 'immutable' doesn't mean the contents of a variable can't change
* 'str' is initialized with the (immutable) value 'hello', and then it is assigned a new (immutable) value, 'world'
* 'hello' and 'world' are different strings; only the value that 'str' holds has changed

* immutable primitive types - only ever represent one value


* -------------------------------------------------------------------------


* OBJECT TYPE is 'MUTABLE'
* objects can take on different forms and values
* objects can represent multiple values
* contents of an object are called 'properties'
* object 'properties' consist of a name (or key) and value

`const myObj = { name: 'Foo', size: 4, color: 'blue' };`

* an object property value can be any type including a Function

* Built-in javascript Object Types: (Array, Date, RegExp, Map && WeakMap, Set && WeakSet)



* -------------------------------------------------------------------------


* about this bit of code:


`function f(o) {
  o.message = "set in f";
  o = {
    message: "new object!"
  };
  console.log(`inside f: o.message="${o.message}" (after assignment)`);
}
let o = {
  message: 'initial value'
};
console.log(`before calling f: o.message="${o.message}"`);
f(o);
console.log(`after calling f: o.message="${o.message}"`);`


* logged output from above --------------------------------------
`before calling f: o.message="initial value"
inside f: o.message="new object!" (after assignment)
after calling f: o.message="set in f"`


* combine both previous examples into a new example example of usage of primitives and objects inside and outside a function

* argument 'o' (inside the function) is different than the variable 'o' (outside the function) (as seen 1st example)
* when 'f' is called, argument 'o' (inside the function) && variable 'o' (outside the function) both point to the same object
* but when argument 'o' is assigned inside 'f', it points to a new, distinct object
* the variable 'o' outside the function still points to the original object
* the variable 'o' outside the function was MUTATED inside function 'f'
* the variable 'o' outside the function has new value because of that mutation inside function 'f'

* the variable value 'o' is a OBJECT value type so a change was made to outside variable 'o' value

* example of working with 'OBJECTS' && 'Primitives' inside and outside a function


* -------------------------------------------------------------------------


#### Functions and Scope:


* in javascript there are two types of scope:

* Local scope
* Global scope

* each function creates a new scope
* scope determines the accessibility (visibility) of Local && Global scope variables
* variables defined inside a function are not accessible (visible) from outside the function



* Local JavaScript Variables:

* variables declared within a javascript function, become LOCAL to the function
* Local variables have Function scope: They can only be accessed from within the function

`// code here can NOT use carName
function myFunction() {
  var carName = 'Volvo';
  // code here CAN use carName
}`


* Since local variables are only recognized inside their functions, variables with the same name can be used in different functions
* Local variables are created when a function starts, and deleted when the function is completed



* Global JavaScript Variables:

* A variable declared outside a function, becomes GLOBAL.


`var carName = 'Volvo';
// code here can use carName
function myFunction() {
  // code here can also use carName
}`


* JavaScript Variables:

* In JavaScript, objects and functions are also variables

* Scope determines the accessibility of variables, objects, and functions from different parts of the code



* Automatically Global:


* If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable

* Below code example declares a global variable 'carName', even if the value is assigned inside a function


`myFunction();
// code here can use carName
function myFunction() {
  carName = "Volvo";
}`


* -------------------------------------------------------------------------


#### ES6 Arrow Functions:


* Arrow Functions do not use the function and return syntax
* Arrow Functions read the same way the function executes

* Basic syntax of an Arrow Function:

`var fn = data => data;`

* the first part of the left-hand side of the assignment statement is the argument that is provided to the function
* If the function takes a single argument, the parentheses can be omitted
* The next part is the arrow and then the expression that is to be returned

* above function is equivalent to:

`var fn = function(data) {
  return data;
};`


* about this bit of code:

`let getNumber = () => 42;
console.log(typeof getNumber); // function
console.log(getNumber()); // 42`


* a new function called getNumber is declared and assigned using an arrow function
* The empty parentheses () indicates the function has no parameters
* the function returns the value 42
* the return keyword is not used
* the expression specified after the arrow will get returned as long as it is not wrapped in braces '{ }'


`var getPrice = (quantity, tax) => (quantity * 5) * (1 + tax);
console.log(getPrice(2, .095)); //  10.95`


* parentheses '()' can be skipped if only one parameter
* parentheses '()' are required with zero or more than one parameter

* to specify a function block with more than one expression the body needs to be wrapped in braces '{ }'
* to specify a function block with more than one expression the return keyword is needed to specify the return value


`var getPrice = (quantity, tax) => {
let price = (quantity * 5)
price *= (1 + tax);
return price;
}`

* logged output from above --------------------------------------
`console.log(getPrice(2, .095)); //  10.95`


* the braces '{ }' represent the function's body
* for the arrow function to return an object literal outside the body, literal is wrapped in parentheses


`var getNumber = data => ({ data: "check", number: 42 });`


* the above is equivalent to:


`var getNumber = function(data) {
  return {
    data: "check",
    number: 42 
  };
};`


* An object literal wrapped in parentheses shows that the braces are an object literal instead of the function body


* ---------------


* Using Arrow Functions to Create IIFEs

* Functions in javascript can be used to create immediately invoked function expressions (IIFE)
* an anonymous function is defined and called without having any reference to it
* it is a pattern that shields the expression from the rest of the program


`var fn = function(number) {
  return {
    getNumber: function() {
      return number;
    } 
  };
}(42);`

`console.log(fn.getNumber()); // 42`


* in the code above, an IIFE is used to create the getNumber() method
* the code above uses the number argument as a return value
* the code above ensures the number property is a private member of the returned object

* arrow functions can achieve the above by wrapping it in parentheses

`var fn = ((number) => {
  return {
    getNumber: function() {
      return number;
    } 
  };
})(42);`

`console.log(fn.getNumber()); // 42`


* arrow functions are function expressions and are not function declarations
* arrow functions are anonymous function expressions
* arrow functions are have no named reference for the purposes of recursion or event binding or unbinding


* ---------------


* Functions And 'This' Keyword:

* inside a function body, a special read-only value called 'this' is available
* the 'this' keyword is associated with objects
* the 'this' keyword relates to functions that are properties of objects


* ---------------


* Non-Arrow Functions  And 'This' Keyword:

* when methods are called (a function that is a property of an object), the 'this' keyword takes on the value of the specific object it was called on 

`const o = {
  name: 'Wallace',
  speak() { return `My name is ${this.name}!`; },
}`

calling `o.speak()`, the 'this' keyword is bound to 'o':

`o.speak(); // My name is Wallace!`


* 'this' is bound according to how the function is called, not where the function is declared
* in above, 'this' keyword took on the value of object 'o'
* 'this' is bound to 'o' not because 'speak' is a property of 'o', but because we called it directly on 'o' ('o.speak')


*  assigning the above function to a variable:

`const speak = o.speak;
speak === o.speak;        // true; both variables refer to the same function 
speak();                  // My name is !`


* in above, function 'speak()' is assigned to variable 'speak'
* in above, 'this' keyword took on the value of variable 'speak'
* JavaScript doesn't know that the function was originally declared in 'o', so 'this' was bound to 'undefined'
* If you call a function and it's not clear how to bind 'this', what this gets bound is 'undefined'


* example below of 'this' in a nested function:


`const o = {
  name: 'Julie',
  greetBackwards: function() {
    function getReverseName() {
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
o.greetBackwards();`


* nested function 'getReverseName' returns 'name' reversed
* calling object 'o.greetBackwards()' binds to 'this'
* however, calling function 'getReverseName' is bound to 'undefined'


* below, a solution to the problem (bound to 'undefined') is to assign a second variable to 'this'
* below, notice `const self = this;`


`const o = {
  name: 'Julie',
  greetBackwards: function() {
    const self = this;
    function getReverseName() {
      let nameBackwards = '';
      for (let i = self.name.length - 1; i >= 0; i--) {
        nameBackwards += self.name[i];
      }
      return nameBackwards;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
o.greetBackwards();`


* In order to gain access to 'o' from within 'greetBackwards()', a local variable is created inside of 'greetBackwards' which refers to 'o'
* this is a common technique addressing (bound to 'undefined'), where 'this' is assigned to 'self' or 'that'
* A better technique is to use ES6 Arrow Functions


* NODE will 'TypeError' if it's not clear how to bind 'this' !!
* NODE will 'error Command failed with exit code 1' if it's not clear how to bind 'this' !!


* ---------------



* ES6 Arrow Functions And 'This' Keyword:

* The real purpose of arrow functions is to handle the 'this' keyword within functions


* 'this' behaves differently inside an arrow function
* in an arrow function the 'this' keyword refers to the context of the function enclosing the arrow function

* arrow functions are designed to bind the context
* with arrow functions 'this' refers to the enclosing context where the arrow function is defined
* an arrow function does not create its own execution context (unlike a non-arrow function)
* arrow functions automatically take 'this' from the outer function where it is defined
* unlike a non-arrow function

* below example not using an arrow functions:


`function Employee(firstName, department, salary) {
  this.firstName = firstName;
  this.department = department;
  this.salary = salary;
  this.getInfo = function() {
    // outer function context = Employee object
    return function() {
      // inner function context = Global object
      console.log(this.firstName + " from " + this.department + " earns " + this.salary);
    };
  }
}
let jim = new Employee('Jim', 'Finance', 5200);`

`let printInfo = jim.getInfo();
printInfo();  // undefined from undefined earns undefined`


* in the above example, a constructor function called 'Employee' is created
* in the above example, a new employee object called 'jim' is created with the 'new' keyword
* (a regular function becomes a 'constructor' function when called on by 'new' keyword)
* 'printInfo' is referring to the inner function context (arrow functions && non arrow functions)
* 'this' is referring to the Global object that does not have any Employee properties (no arrow function)

* Results of 'printInfo()':
* 'printInfo' is producing 'undefined' whenever a property on 'this' is used

* 

* in above code, in order to gain access to 'Employee' object properties, a reference to 'Employee' is required inside 'getInfo()'
* 




* below example using an arrow function:


`function Employee(firstName, department, salary) {
  this.firstName = firstName;
  this.department = department;
  this.salary = salary;
  this.getInfo = function() {
    // outer function context = Employee object
    return () => {
      // inner function context = surrounding context = Employee object
      console.log(this.firstName + " from " + this.department + " earns " + this.salary);
    };
  }
}
let jim = new Employee('Jim', 'Finance', 5200);`

`let printInfo = jim.getInfo();
printInfo(); // Jim from Finance earns 5200`











* -------------------------------------------------------------------------


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
* You can't get an overview of the contents of a WeakMap
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


For above, create a global variable named "drink" and set it equal to "wine". 
Next we have a function 'foo', that returns another function. 
When we say: 'var bar = foo()', we are assigning the value that foo returns to bar.

Since foo returns a function, then bar is now a function. 
Because the function that has been assigned to bar is defined inside of foo, it has access to foo. 
This means that in our case, bar returns a private variable that lives inside of foo. 
That variable inside of foo named "drink", has been set to "beer". 
So, in the global context, "drink" equals "wine" and in the context of foo, "drink" equals "beer".

The end result is that when we pass the variable "drink" to the console, it is "wine", because in the global scope, "drink" is equal to "wine". 
But when we pass "bar()" to the console, we get "beer". 
That is because "bar()" is a function, it returns a variable named "drink" and because "Bar()" was defined inside of foo, it returns the first "drink" it finds, which is private to "foo()" and it is equal to "beer".

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

* When that returned function is assigned to a variable, as long as that variable is alive, it (a function) has access to the context of the function that wraps it. This means that the outer (or "wrapping") function can contain a private member, but the wrapped function has access to it

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

* What's important about the 'prototype' is a mechanism called 'dynamic dispatch' ('method invocation')
* JavaScript performs 'dynamic dispatch' using the 'prototype chain'
* When accessing a property or method on an object, if it doesn't exist, JavaScript checks the object's prototype to see if it exists there
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
* a static method (class method), does not apply to a specific instance
* in a static method, 'this' is bound to the class itself (though usually it is the name of the class)
* Static methods perform generic tasks that are related to the class, but not any specific instance
* following the 'car' class, the 'car' 'VIN' would logically apply to the class and not a 'car' instance
* a 'vin()' method would be considered a 'Static' method (since it will apply to all 'vehicles', hence all 'cars', 'boats')
* Static methods are used to perform generic tasks that are related to the whole class, but not class instances


#### Inheritance:

* the concept of prototype shows a type of inheritance:
* when you create an instance of a class, it inherits whatever functionality is in the class's prototype
* if a method isn't found on an object's prototype, it checks the prototype's prototype
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
* call to 'super()': a special function in JavaScript that invokes the superclass's constructor
* 'super()' function call is required for subclasses
* instances of the 'Car' class can access all methods of the 'Vehicle' class, but not the other way around
* a 'new Vehicle()' instance does not have a 'deployAirbags()' method (unless that subclass instance posess a 'deployAirbags()' 'prototype' method)

#### Polymorphism:

* a subclass instance is a member of both own its class and any superclasses
* in javascript, the code can take the form of 'duck typing'
* 'duck typing': 'if it walks like a duck, and quacks like a duck...it's probably a duck.'
* with 'Car' superclass/subclass example
* if an object has a 'deployAirbags' method it probably is an instance of 'Car' class
* testing an objects 'instanceof' operator against a class and then making an instance type assumption based on that evaluation



* ====================================================================================================
* ====================================================================================================
* ====================================================================================================


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


* ====================================================================================================


#### Default Function Parameters:

* ES6 provides ability to specify default values for arguments
* previously, when values for arguments weren't provided, they got a value of 'undefined'
* Default values allow you to specify some other default value

`function f(a, b = "default", c = 3) { 
  return `${a} - ${b} - ${c}`;
 }`


* logged output from above --------------------------------------
`f(5, 6, 7);   // "5 - 6 - 7"
f(5, 6);      // "5 - 6 - 3"
f(5);         // "5 - default - 3"
f();          // "undefined - default - 3"`


* ====================================================================================================


#### Destructuring Assignment (ES6):

* Objects and arrays are used to group data in JavaScript
* various patterns exist to systematically fetch data from these defined structures when we need them
* ES6 further extends this process by making it easier and simpler through a process called 'destructuring'

* Destructuring Assignment: enables the 'destructure' an object or an array into individual variables

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


* ====================================================================================================


#### Destructuring Arguments:


* ====================================================================================================


#### ES6 Rest and Spread Operators:


* Rest Operator (Usage with Arrays):

* 'Rest' refers to gathering up parameters and putting them all into a single array
* provides the ability to pass a function a dynamic number of parameters


`var showCollections = function (id, ...collection) {
  console.log(collection instanceof Array);
};
showCollections(42, "movies", "music");`


* logged output from above --------------------------------------
`true`


* the '...' symbol is the rest symbol
* the '...' symbol precedes a named parameter ('collection')
* named parameter 'collection' becomes an Array that gathers all remaining parameters passed to the function


`var showCollections = function (id, ...collection) {
  console.log(collection);
};
showCollections(42, "movies", "music");`


* logged output from above --------------------------------------
`// ["movies", "music"]`


* Rest parameter 'collection' gathers up all the remaining parameters after the 'id' parameter
* Rest parameter 'collection' then turns those remaining parameters into an array called 'collection'
* Excluding the first defined parameter 'id', everything will be placed in array 'collection'
* calling 'showCollections' by passing it just one value which is the 'id', it logs out an empty array '[]'
* calling 'showCollections.length' gives the number of parameters in the function (did not know that)


* Rest Operator (Usage with Objects):

* usage will collect the remaining enumerable property keys that are not already picked off by destructuring
* those keys and their values are copied onto a new object
* (when destructuring an object, variable names must match property names in the object)

`let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };`


* values from above --------------------------------------
`x;   // 1
y;    // 2
z;    // { a: 3, b: 4 }`



* Spread Operator:

* 'Spread' refers to spreading out the elements of an array (or string)
* spread operator is denoted by '...' before an array
* spread operator does the reverse operation of a REST operator
* spread operator 'spreads' out an array and passes the values into the specified function

`let values = [200, 300, 400];
let newSet = [100, ...values, 500]
console.log(newSet);`


* logged output from above --------------------------------------
`// [100, 200, 300, 400, 500]`


* spread '...' is used like a concatenation or insertion mechanism
* the 'values' array is inserted in between the existing 'newSet' array values

* the spread operator specifies a single array that is split into separate arguments
* those separate arguments are then passed into a function or method


* about this bit of code:

`let numbers = [-25, 100, 42, -1000];
console.log(Math.max(...numbers, 900));`

* logged output from above --------------------------------------
`// 900`


* ('Math.max' function takes any number of arguments and returns the maximum value)
* the spread operator spreads out the values in array '...numbers' as arguments in function call 'Math.max'


* using spread operator to create copies of objects with new or updated values
* the spread operator is a solution to not mutating state (a core tenet of Redux)

* called 'object spread syntax', spread (...) operator to copy enumerable properties from one object to another


* Spread Operator (Usage with Objects):

* Spread properties in object initializers copies enumerable properties from a provided object onto the newly created object

`let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ...z };`


* value from above --------------------------------------
`n; // { x: 1, y: 2, a: 3, b: 4 }`



* ====================================================================================================



#### Scope Versus Existence:

* Scope determines when and where variables, constants, and arguments are defined


#### Global Scope:


#### Block Scope:


#### Closure:


#### Array Operations: map and filter:


#### Array: reduce:



