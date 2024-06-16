"use strict"; // treat all JS Code as newer version

// this is a pop up message box with the text Hello inside of it.  
//alert("Hello") 
/*
also we are using node JS, not browser 
there is deferent method and syntax for pop up message box in node JS
*/

// A Semicolon may be omitted in most case when a line break exists.
// Here JS interprets the line break as implicit semicolon;
// This is called "automatic Semicolon insertion".

//In most cases, a newline implies a semicolon. But “in most cases” does not mean “always”!
//There are cases when a newline does not mean a semicolon. For example:
console.log(30 +
    1
    + 35); // code readability should be high

/*
The code outputs 6 because JavaScript does not insert semicolons here. 
It is intuitively obvious that if the line ends with a plus "+", then it is an “incomplete expression”, so a semicolon there would be incorrect.And in this case, that works as intended.

But there are situations where JavaScript “fails” to assume a semicolon where it is really needed.

Errors which occur in such cases are quite hard to find and fix.
 */

console.log("heelo")

let name = "jignesh"
let age = 18
let isLoggedIn = false
let state;

// Premitive Data Types
//01 - Number = > 2 to power 53
//02 - bigint 
//03 - String ="Jignesh"
//04 - boolean= true or false
//05 - null => nothing (Standalone value) , 
//06 - undefined => garbage value
//07 - symbol => unique

//08 - object 
console.log(typeof undefined); //undefined is self data type 
console.log(typeof null); //null is a object