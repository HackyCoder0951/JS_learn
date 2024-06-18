// Primitive Data Types 

//01 - String ="Jignesh"
//02 - Number = > 2 to power 53
//03 - boolean= true or false
//04 - null => nothing (Standalone value) , 
//05 - undefined => garbage value
//06 - symbol => unique
//07 - bigint 

// Reference Data Types / Non-Primitive Types

//01 - Array
//02 - Objects
//03 - Functions

// note - JS is  dynamically typed language 
/* In dynamically typed languages all type checks are performed in a runtime, 
only when your program is executing. 
So this means you can just assign anything you want to the variable and it will work.
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let currentUserId = "jignesh"
let user;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 45646546546546546546n

const heros = ["shaktiman", "naagraj", "doga"]
let MyObj = {
    name: "jignesh",
    age:22,
}

const myFunction = function() {
    console.log("hello world!");
}


console.log(typeof myFunction ); 

/*

JavaScript primitive data types
There are five types of primitive data types in JavaScript. They are as follows:

Data Type	        Description
String	            represents sequence of characters e.g. "hello"
Number	            represents numeric values e.g. 100
Boolean	            represents boolean value either false or true
Undefined	        represents undefined value
Null	            represents null i.e. no value at all

*/ 

/*

JavaScript non-primitive data types
The non-primitive data types are as follows:

Data Type	    Description
Object	        represents instance through which we can access members
Array	        represents group of similar values
RegExp	        represents regular expression

*/

let myYoutubename = "jigneshgoogle.com"

let anothername = myYoutubename
anothername = "jignesh"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "jignesh@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "jignesh@ssci.com"

console.log(userOne.email);
console.log(userTwo.email);
