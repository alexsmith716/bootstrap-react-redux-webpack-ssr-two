// ============================================================================
// ------------------------ Going Over ES6 && Some ES5 ------------------------
// ----------------------------- All JavaSript --------------------------------
// ============================================================================


### Expression:

* an expression produces a value ( myvar, 3 + x, myfunc("a", "b" )


### Statement:

* a statement performs an action


// ============================================================================


### Functions:

* A function is a self-contained collection of statements that run as a single unit
* essentially, a function works like a subprogram
* Functions are central to JavaScript's power and expressiveness



#### Functions And 'This' Keyword -------------------------------:


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


* nested function 'getReverseName' reverses the 'name'
* calling 'o.greetBackwards()' binds 'this'
* However, when 'getReverseName()' is called from inside 'greetBackwards()', 'this' is bound to 'undefined'
* ES5 is 'CONFUS CONTEXT' on inner function call 'getReverseName()' 
* On ES5 inner function call to 'getReverseName()', 'this' is referring to the Global object that does not have any 'greetBackwards()' properties
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

* When a JavaScript program starts (before any functions are called( it is executing in global scope
* The implication is that anything declared in global scope will be available to all scopes in your program

* Anything declared in global scope is called a 'global'

* Globals are not bad they are a necessity

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

* 'let' is bascially a block-scoped version of 'var'
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




























