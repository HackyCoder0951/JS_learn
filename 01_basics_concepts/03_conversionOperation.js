let score = "jignesh";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) // guranteed that score is converted into numbers

//console.log(typeof valueInNumber);
//console.log(valueInNumber); // NaN - Not a Number it is a also special type

// "33" => 33
// "33abc" => NaN
// true => 1; false =>0

let isLoggedIn = "jignesh"

let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(booleanIsLoggedIn); // Boolean

// 1 => true; 0 => false
// "" => false;
// "jignesh" => true

let someNumber = 44

let stringNumber = String(someNumber);
//console.log(stringNumber); 
//console.log(typeof stringNumber);

//********************* Operations *******************/

let value = 3
let negValue = -value // negative value conversion
// console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%2);
*/

let str1 = "hello"
let str2 = " Jignesh"

let str3 = str1 + str2

/*
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2" );
*/

//console.log( +true );
//console.log( +"" );

let num1, num2, num3;

num2 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
//console.log(gameCounter); 


let a = 1;
let x = 1 + (a *= 2);
//console.log(a,x);

/* 
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)
*/

//01 - The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
//02 - The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
//03 - The addition with a string appends the number 5 to the string.
//04 - The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
//05 - null becomes 0 after the numeric conversion.
//06 - undefined becomes NaN after the numeric conversion.
//07 - Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.


/*
Numeric conversion rules:

Value	        Becomes…
undefined	    NaN
null	        0
true and false	1 and 0
string	        Whitespaces (includes spaces, tabs \t, newlines \n  etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

*/