// ============================================================================
// ------------------------ Going Over ES6 && Some ES5 ------------------------
// ----------------------------- All JavaSript --------------------------------
// ============================================================================


### Syntax:


#### Expression:

* an expression produces a value:

  `var x = y >= 0 ? y : -y;`


#### Statement:

* a statement performs an action:

  `var x;
  if (y >= 0) {
    x = y;
  } else {
    x = -y;
  }`


### Values:

* All 'values' in JavaScript have 'properties'
* Each 'property' has a 'key' (or name) and a 'value'

  `output: {
    path: '/assets',
    publicPath: '/assets/',
  }`

* the dot (.) operator to reads a property:

  `value.propKey`

  `output.path.length
  // or written as:
  '/assets'.length`


* The dot operator is also used to assign a value to a property:

`const configuration = {};  // empty object
configuration.mode = 'production'; // create property `mode`, set it to string 'production'`


* The dot operator is also used to invoke methods:


`configuration.plugins =`


#### JavaScript Value Types:

* Primitive Values: 





// ============================================================================
// ============================================================================
// ============================================================================
// ============================================================================


### Functions:

* A function is a self-contained collection of statements that run as a single unit
* essentially, a function works like a subprogram
* Functions are central to JavaScript's power and expressiveness



#### Functions And 'This' Keyword -------------------------------:


* In JavaScript, 'this' is the current execution context of a function
* inside a function body, a special read-only value called 'this' is available
* the 'this' keyword is associated with objects
* the 'this' keyword relates to functions that are properties of objects
* 'this' keyword refers to the instance the method was invoked on
* 'this' is like a 'placeholder' for a specific instance



#### ES5 vs ES6 Functions -------------------------------:


* An arrow function (ES6) is different from a normal function (ES5) in two main ways:

* First, an Arrow function is less verbose (simpler to read):

`// Arrow function:
const arr = [1, 2, 3];
const squares = arr.map(x => x * x);`

`// Traditional function expression:
const squares = arr.map(function (x) { return x * x });`


* Second, an Arrow function's 'this' is picked up from surroundings (lexical) just like any other variable
* (Arrow Functions lexically bind the context, which means 'this' refers to the enclosing context where the arrow function is defined)
* (Arrow Functions take 'this' from the outer function where it is defined)
* Therefore, Arrow functions do not need 'bind()' or 'that = this' or 'self = this'

* --------------------------------------------------------------
* Note: Normally, the 'this' keyword relates to functions that are properties of objects
* Note: When methods are called, the 'this' keyword takes on the value of the specific object it was called on

* Consider below code:

`const o = {
  name: 'Wallace',
  speak() { return `My name is ${this.name}!`; },
}`

`o.speak(); // "My name is Wallace!`


* When calling 'o.speak()', the 'this' keyword is bound to 'o'

* Note: 'this' is bound according to how a function is called, not where the function is declared
* 'this' is bound to 'o' not because 'speak' is a property of 'o', but because it is called it directly on 'o' '(o.speak)'

* Look what happens if that same function is assigned to a variable:

`const speak = o.speak;
speak === o.speak;        // true; both variables refer to the same function
speak();                  // 'My name is !'`


* because of the way 'speak()' was called, JavaScript didn't know that the function was originally declared in 'o', so this was bound to 'undefined'

* The term method is traditionally associated with object-oriented programming
* ('method' being a function that is a property of an object and is designed to be called directly from an object instance (such as o.speak()) above)

* --------------------------------------------------------------


* Consider the below code examples (accessing 'this' in a nested function / a function inside a method):


* ES5 (Without Arrow Function):

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


* ES5, unlike ES6, creates it's own 'context' (how ES5 interperets it's surroundings)
* nested function 'getReverseName' reverses string 'name'
* when calling 'o.greetBackwards()' ES5 'correctly' binds 'this' to the object it was called on 'o'
* However, when 'getReverseName()' is called from inside 'greetBackwards()', 'this' is bound to 'undefined'
* ES5 'inaccurately' sets the context on inner function call 'getReverseName()' to the 'Global' object
* On ES5 inner function call to 'getReverseName()', the context of 'Global' does not have any 'greetBackwards()' properties
* On ES5 inner function call to 'getReverseName()', 'this' is binding to 'undefined'


* ES6 (With Arrow Function):

`const o = {
  name: 'Julie',
  greetBackwards: function() {
    const getReverseName = () => {
      let nameBackwards = '';
      for (let i = this.name.length - 1; i >= 0; i--) {
        nameBackwards += this.name[i];
      }
      return nameBackwards;
    };
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
o.greetBackwards();`





### Scope:


#### Basically -------------------------------:

* Scope determines when and where variables, constants, and arguments are considered to be defined


#### Scope Versus Existence -------------------------------:

* if a variable doesn't exist, it's not in scope
* variables that have not yet been declared, or variables that have ceased to exist because a function exits, are not in scope
* if a variable is not in scope, it does not necessarily mean it doesn't exist
* scope (or visibility) refers to the identifiers that are currently visible and accessible by the currently executing part of the program

* Existence, refers to identifiers that hold something for which memory has been allocated (reserved)
* When something ceases to exist, JavaScript doesn't necessarily reclaim the memory right away
* When something ceases to exist, JavaScript notes that the item no longer needs to be kept around, and the memory is periodically reclaimed
* memory is periodically reclaimed in a process called garbage collection
* Garbage collection in JavaScript is automatic


#### Lexical Versus Dynamic Scoping -------------------------------:

* When you look at the source code for a program, you are looking at its lexical structure

* (Lexical Structure: The lexical structure of a programming language is the set of elementary rules that specifies how you write programs in that language)
* (The lexical structure is the lowest-level syntax of a language)
* (The lexical structure specifies what variable names look like, what characters are used for comments, how one program statement is separated from the next)

* Lexically, a program is a series of statements read from top to bottom

* however, when a program actually runs, execution can jump around

* Scoping in JavaScript is lexical, it can be determined what variables are in scope by looking at the source code

* Lexical scoping means whatever variables are in scope where you define a function from (as opposed to when you call it) are in scope in the function

* Lexical scoping in JavaScript applies to global scope, block scope, and function scope


#### Global Scope -------------------------------:

* Scope is hierarchical, and there has to be something at the base of the tree
* the scope that you're implicitly in when you start a program is called 'global scope'

* When a JavaScript program starts (before any functions are called) it is executing in global scope
* The implication is that anything declared in global scope will be available to all scopes in your program

* Anything declared in global scope is called a 'global'

* sort of like anything declared in the scope of a function will be available to anything called from that function


#### Block Scope -------------------------------:

* a block is a list of statements surrounded by curly braces '{ }'
* Block scope refers to variables that are only in scope within the block


`console.log('before block'); 
{
  const x = 3;
  console.log(x);
  console.log(`inside block; x=${x}`);
}
console.log('outside block +++');
console.log(`outside block; x=${x}`);`

* basic output from above --------------------------------------
`// before block
// inside block:  3
// outside block +++
// ReferenceError: x is not defined`


* Most languages with C syntax have block scope.
* All variables defined in a block (a list of statements wrapped with curly braces) are not visible from outside of the block.
* The variables defined in a block can be released when execution of the block is finished


### Scoping and Variables (ES5 && ES6) -------------------------------:



#### ES5 -------------------------------:

* In ES5, you declare variables via 'var'
* ES5 variables ('var') are function-scoped, meaning their scope is within the function enclosing them
* In ES5, function scope means the parameters and variables defined in a function are not visible outside of the function
* In ES5, function scope means that a variable defined anywhere within a function is visible everywhere within the function
* In ES5, inner functions get access to the parameters and variables of the functions they are defined within (with the exception of 'this' and arguments)
* In ES5, variables are NOT Block Scoped

* So, to create a new block with its own scope, the code is wrapped inside a regular function or an immediately invoked function expression

* ES5 Function Level Scoped Examples:

`var price = 10; // Global Declaration
function showPrice() {
  var price = 12; // Local Declaration using var
  console.log(price); // 12
}
showPrice();
console.log(price); // 10`

* an IIFE:

`var price = 10; // Global Declaration
(function() {
  var price = 12; // Local Declaration using var
  console.log(price); // 12
})();
console.log(price); // 10`


* above examples demonstrate that variable 'price' is scoped to the enclosing function and the changes are not leaked to parent scope (global scope)

* ES5 Block Scoped Example:

`var price = 10;
if (price) {
  price = 12;
  console.log(price); // 12
}
console.log(price); // 12`


* above example demonstrates that the changes inside the 'if' block are leaked to the parent scope (global scope)
* above example demonstrates that the 'var' declarations are bound to the function scope and does not create block scope
* ES5 is NOT Block Scoped



#### ES6 -------------------------------:


* ES6 variables are declared using 'let' and 'const'
* 'let' && 'const' variables are block-scoped, their scopes are the innermost enclosing blocks '{ }' 

* 'let' is basically a block-scoped version of 'var'
* 'let' is similar to 'var', but the variable 'let' declares is block-scoped, it only exists within the current block

* 'const' works like 'let', but creates variables whose values can't be changed
* 'const' works like 'let', but the variables declared must be immediately initialized, with a value that can't be changed afterwards

* 'let' and 'const' variables only exist within the innermost block '{ }' that surrounds them


* Example of 'let':

`let aaa = 42;
{
  let aaa = 1000;
  console.log('>>> aaa: ', aaa); // 1000
}
console.log('>>> aaa: ', aaa); // 42`


* Example of 'const':


* In ES6, variables are Block Scoped



### Functions:


#### Basics (ES5 && ES6):

* A function encloses a set of statements

* Functions in JavaScript are objects

* Objects are collections of name/value pairs having a hidden link to a prototype object

* Objects produced from object literals (objects) are linked to Object.prototype

* Function objects are linked to 'Function.prototype' (which is linked to 'Object.prototype')

* Every function is created with two hidden properties: the function's 'context' and the code that implements the function's 'behavior'

* Every function is created with a prototype 'property'

* Its value is an object with a constructor property whose value is the function

* functions are objects, and can be used like any other value

* functions can be stored in variables, objects, and arrays

* functions can be passed as arguments to functions, and functions can be returned from functions

* functions can have methods

* The thing that is special about functions is that they can be 'invoked'


* There are two ways to define functions: 'declarations' and 'expressions'


* Function 'declarations' are named functions called/invoked with the function keyword:

`// declaration +++++++++++++++++++++++++++
function addOne(foo) {
  return foo + 1
}`


*  Function 'expressions' are anonymous functions that are assigned to a variable

`// expression +++++++++++++++++++++++++++
const addOne = function(foo) {
  return foo + 1
}`




#### Function Literal:

* The word 'literal' means that you're providing the value directly in the program
* A 'literal' is a way to create a value; JavaScript takes the literal value provided and creates a data value from it

* Function objects are created with function literals:

`// Create a variable called 'add' and store a function in it that adds two numbers
//
var add = function (a, b) { 
  return a + b;
};`

* A function literal has four parts:

* The first part is the reserved word function

* The optional second part is the function's name
* The function can use its name to call itself recursively
* The name can also be used by debuggers and development tools to identify the function
* If a function is not given a name, as shown in the above example, it is said to be 'anonymous'

* The third part is the set of parameters of the function, wrapped in parentheses

* The fourth part is a set of statements wrapped in curly braces.
* These statements are the body of the function
* They are executed when the function is invoked.

* A function literal can appear anywhere that an expression can appear

* Functions can be defined inside of other functions

* An inner function has access to its own parameters and variables

* An inner function also has access to the parameters and variables of the functions it is nested within

* The function object created by a function literal contains a link to it's outer context (closure)



#### Function Invocation (ES5):

* Invoking a function suspends the execution of the current function, passing control and parameters to the new function

* In addition to the declared parameters, every function receives two additional parameters: 'this' and 'arguments'

* The 'this' parameter is very important in object oriented programming

* The 'this' parameter's value is determined by the invocation pattern

* There are four patterns of invocation in JavaScript: 

* the method invocation pattern
* the function invocation pattern
* the constructor invocation pattern
* the apply invocation pattern. 

* The patterns differ in how the parameter 'this' is initialized

* 'this' is 





### Arrow Functions (ES6):

* Arrow Functions read the same way the function executes

* Basic syntax of arrow functions:

`var fn = data => data;`

* left-hand side of the assignment statement is argument provided to the function

* if the function takes a single argument/parameter, you can omit the parentheses

* more than one argument/parameter, requires parentheses

* The next part is the arrow and the expression that is to be returned

* the expression specified after the arrow will get returned as long as it is not wrapped in curly braces/brackets '{ }'

`var getPrice = (quantity, tax) => (quantity * 5) * (1 + tax);
console.log(getPrice(2, .095)); //  10.95
`
* a single expression, does not require the '{ }' or the 'return' statement

* a function block with a single expression does not require brackets and the expression is automatically returned

* a function block with more than one expression requires brackets and a 'return' statement with a returned value

`var getPrice = (quantity, tax) => {
  let price = (quantity * 5)
  price *= (1 + tax);
  return price;
}
console.log(getPrice(2, .095)); //  10.95`


* for an arrow function to return an 'object literal', the literal is wrapped in parentheses '( )'

`var getNumber = data => ({ data: 'check', number: 42 });
// equivalent to:
var getNumber = function(data) {
  return {
    data: 'check',
    number: 42 
  };
};`


* An object literal wrapped in parentheses shows that the braces are an object literal not the function body

* Arrow functions are always anonymous

* Arrow functions can be assigned to a variable

* Arrow functions cannot be created as named function like you can with the function keyword.














