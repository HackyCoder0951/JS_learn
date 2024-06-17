"use strict"; // treat all JS Code as newer version

// this is a pop up message box with the text Hello inside of it.  
        // alert("Hello") 
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
//01 - Number            => 2 to power 53
    /* 
    // Special Numeric Values :-
            01 - Infinity 
            02 - -Infinity
            03 - NaN //NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation.
                NaN is sticky. Any further mathematical operation on NaN returns NaN.
                So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
    //  Mathematical operations are safe
            Doing maths is “safe” in JavaScript. 
            We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
            The script will never stop with a fatal error (“die”). 
            At worst, we’ll get NaN as the result.
    */
   // Special numeric values formally belong to the “number” type. Of course they are not numbers in the common sense of this word.
//02 - bigint 
    /*
    In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.

    To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308), but outside of the safe integer range ±(2^53-1) there’ll be a precision error, because not all digits fit into the fixed 64-bit storage. 
    So an “approximate” value may be stored.

    For example, these two numbers (right above the safe range) are the same:

    console.log(9007199254740991 + 1); // 9007199254740992
    console.log(9007199254740991 + 2); // 9007199254740992
    So to say, all odd integers greater than (253-1) can’t be stored at all in the “number” type.

    For most purposes ±(2^53-1) range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.

    BigInt type was recently added to the language to represent integers of arbitrary length.

    A BigInt value is created by appending n to the end of an integer:

    // the "n" at the end means it's a BigInt
    const bigInt = 1234567890123456789012345678901234567890n;
    As BigInt numbers are rarely needed, we don’t cover them here, but devoted them a separate chapter BigInt. Read it when you need such big numbers.

    Compatibility issues
    Right now, BigInt is supported in Firefox/Chrome/Edge/Safari, but not in IE.
    */

//03 - String            => "Jignesh"
    /*
        // A string in JavaScript must be surrounded by quotes.

        In JavaScript, there are 3 types of quotes.

           01 - Double quotes: "Hello".  // ""
           02 - Single quotes: 'Hello'.  // ''
           03 - Backticks: `Hello`.      // ``

        Double and single quotes are “simple” quotes. 

        There’s practically no difference between them in JavaScript.

        Backticks are “extended functionality” quotes. 
        
        They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:
          
            // let name = "John";

            // embed a variable
            alert( `Hello, ${name}!` ); // Hello, John!

            // embed an expression
            alert( `the result is ${1 + 2}` ); // the result is 3

        The expression inside ${…} is evaluated and the result becomes a part of the string. 
        
        We can put anything in there: a variable like name or an arithmetical expression like 1 + 2 or something more complex.

        Please note that this can only be done in backticks. Other quotes don’t have this embedding functionality!

        // alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
    */

//04 - boolean           => true or false
    /*
        
    */

//05 - null              => nothing (Standalone value) , 
//06 - undefined         => garbage value
//07 - Objects & Symbol  => unique
//08 - typeof Operator   => The typeof operator returns the type of the operand
 
console.log(typeof undefined); //undefined is self data type 
console.log(typeof null); //null is a object

