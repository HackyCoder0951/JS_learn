// Difference Bitween var, let, and const
/*
Var - var is functionally or globally scoped.
    - Can be redclared.
    - Can be declared without intialization.
    - Can be updated.
*/
/*
Let - let is block scoped.
    - Cannot be redclared within its scope.
    - Can be declared without intialization.
    - Can be updated.
*/
/*
Const - const is block scoped.
      - Cannot be redclared within its scope.
      - Must be intialized at the time of declaration.
      - Can never be updated.
*/
var a = 3;
var a = 4;

console.log(a); // 4 as var variables can be redeclared + updated

let b = 3;

//let b = 4; // Syntax Error as let variables cannot be redeclared

// If we just do, it will work because it can be updated
b = 4;
console.log(b); 

const c = 3;
//const c = 4; // Syntax Error as const variables cannot be redeclared or updated

console.log(c); 

//const d; //Missing initializer in const declaration


// Difference Bitween == & === in JavaScript

// == only checks for the value
// === checks for value + type

let A = 5 // number
let B = '5' // string
console.log(A == B) // true
console.log(A === B) // false

// Hoisting in JavaScript - 
/* - This is JavaScript's default behavior of moving declarations to the top of the program.

 - var declaration is hoisted up and initialized with undefined.
 - let and const declarations are hoisted up but not initialized.
 - function definitions are also hoisted up and stored as they are.
*/

function consoleNum() {
    console.log(num);
    var num = 10;
  }
  
  consoleNum(); // undefined
  
  // Why no error?
  
  // This is how runtime sees this
  {
    var num;
    console.log(num);
    num = 9;
  }
  
  // If instead of var -> let, it will give an error as let values are not initialized