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
        The boolean type has only two values: true and false.

        This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

        For instance:

        let nameFieldChecked = true; // yes, name field is checked
        let ageFieldChecked = false; // no, age field is not checked

        Boolean values also come as a result of comparisons:

        let isGreater = 4 > 1;

        alert( isGreater ); // true (the comparison result is "yes")
    */

//05 - null              => nothing (Standalone value) , 
    /*
        The special null value does not belong to any of the types described above.

        It forms a separate type of its own which contains only the null value:

        let age = null;

        In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

        It’s just a special value which represents “nothing”, “empty” or “value unknown”.

        The code above states that age is unknown.
    */

//06 - undefined         => garbage value
    /*
        The special value undefined also stands apart. It makes a type of its own, just like null.

        The meaning of undefined is “value is not assigned”.

        If a variable is declared, but not assigned, then its value is undefined:

        let age;

        alert(age); // shows "undefined"

        Technically, it is possible to explicitly assign undefined to a variable:

        let age = 100;

        // change the value to undefined
        age = undefined;

        alert(age); // "undefined"

        …But we don’t recommend doing that. Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as a default initial value for unassigned things.
    */
   
//07 - Objects & Symbol  => unique
    /*
        The object type is special.

        All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). 
        
        In contrast, objects are used to store collections of data and more complex entities.

        Being that important, objects deserve a special treatment. 

        The symbol type is used to create unique identifiers for objects. 
        
    */

//08 - typeof Operator   => 
    /* 
        The typeof operator returns the type of the operand

        The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.

    */

// A call to typeof x returns a string with the type name:

    console.log(typeof undefined); // "undefined"

    console.log(typeof 0); // "number"

    console.log(typeof 10n); // "bigint"

    console.log(typeof true); // "boolean"

    console.log(typeof "foo"); // "string"

    console.log(typeof Symbol("id") ); // "symbol"

    console.log(typeof Math ); // "object"  (1)

    console.log(typeof null); // "object"  (2)

    console.log(typeof alert ); // "function"  (3)


/*
    The last three lines may need additional explanation:

    Math is a built-in object that provides mathematical operations. 

    The result of typeof null is "object". 
    
    That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. 
    
    It is a special value with a separate type of its own. 
    
    The behavior of typeof is wrong here.

    The result of typeof alert is "function", because alert is a function. 
    
    Functions belong to the object type. But typeof treats them differently, returning "function". 
    
    That also comes from the early days of JavaScript. Technically, such behavior isn’t correct, but can be convenient in practice.

    ** The typeof(x) syntax ** 

    You may also come across another syntax: typeof(x). It’s the same as typeof x.

    To put it clear: typeof is an operator, not a function. 
    
    The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

    Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). 
    
    Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

    Some people prefer typeof(x), although the typeof x syntax is much more common.
 */

    // Summary
    /*    
        There are 8 basic data types in JavaScript.

        Seven primitive data types:

            01 - number for numbers of any kind: integer or floating-point, integers are limited by ±(2^53-1).
            02 - bigint for integer numbers of arbitrary length.
            03 - string for strings. A string may have zero or more characters, there’s no separate single-character type.
            04 - boolean for true/false.
            05 - null for unknown values – a standalone type that has a single value null.
            06 - undefined for unassigned values – a standalone type that has a single value undefined.
            07 - symbol for unique identifiers.
        
        And one non-primitive data type:

            08 - object for more complex data structures.
        
        The typeof operator allows us to see which type is stored in a variable.

            * Usually used as typeof x, but typeof(x) is also possible.
            * Returns a string with the name of the type, like "string".
            * For null returns "object" – this is an error in the language, it’s not actually an object.

    */
