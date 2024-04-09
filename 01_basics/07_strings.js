/* String in JS */

 // The JavaScript string is an object that represents a sequence of characters.
    /* There are 2 ways to create string in JavaScript */
        // :-> By string literal
        // :-> By string object (using new keyword)

//  1) By string literal
     /*   The string literal is created using double quotes. 
        The syntax of creating string using string literal is given below:
        -> var stringname="string value";  */

    //2) By string object (using new keyword)
    /*    The syntax of creating string object using new keyword is given below:
        -> var stringname=new String("string literal");  
        Here, new keyword is used to create instance of string. */

//JavaScript String Methods
/* Let's see the list of JavaScript string methods with examples.

Methods	            Description
charAt()	        It provides the char value present at the specified index.
charCodeAt()	    It provides the Unicode value of a character present at the specified index.
concat()	        It provides a combination of two or more strings.
indexOf()	        It provides the position of a char value present in the given string.
lastIndexOf()	    It provides the position of a char value present in the given string by searching a character from the last position.
search()	        It searches a specified regular expression in a given string and returns its position if a match occurs.
match()	            It searches a specified regular expression in a given string and returns that regular expression if a match occurs.
replace()	        It replaces a given string with the specified replacement.
substr()	        It is used to fetch the part of the given string on the basis of the specified starting position and length.
substring()	        It is used to fetch the part of the given string on the basis of the specified index.
slice()	            It is used to fetch the part of the given string. It allows us to assign positive as well negative index.
toLowerCase()	    It converts the given string into lowercase letter.
toLocaleLowerCase()	It converts the given string into lowercase letter on the basis of host?s current locale.
toUpperCase()	    It converts the given string into uppercase letter.
toLocaleUpperCase()	It converts the given string into uppercase letter on the basis of host?s current locale.
toString()	        It provides a string representing the particular object.
valueOf()	        It provides the primitive value of string object.
split()	            It splits a string into substring array, then returns that newly created array.
trim()	            It trims the white space from the left and right side of the string.        

*/
// 01 - JS String 'at(index)' Method
    //  Description
        // The at() method returns an indexed character from a string.
        // The at() method returns the same as [].
    
    // Syntax 
        // string.at(index) 

    // Example :- 
        {
            let text = "W3Schools", character = text.at(0);
            console.log("JS String 'at(index)' Method = ",character);
        }

// 02 - JS String 'charAt(index)' Method 
    //  Description
        // The charAt() method returns the character at a specified index (position) in a string.
        // The index of the first character is 0, the second 1, ...
    
    // Syntax
        // string.charAt(index)
    
    // Example :-
        {
            let text = "HELLO WORLD";
            let letter = text.charAt(0,1,2);
            console.log("JS String 'charAt(index)' Method = ",letter);
        }   

// 03 - JS String 'charCodeAt(index)' Method
    // Description 
        // The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

    // Syntax
        //string.charCodeAt(index)
    
    // Example :-
        {
            let text = "HELLO WORLD";
            let code = text.charCodeAt(0);
            console.log("JS String 'charCodeAt(index)' Method = ",code);
        }

// 04 - JS String 'codePointAt(index)' Method

// 05 - JS String 'concat()' Method

// 06 - JS String 'constructor()' Method

// 07 - JS String 'endsWith()' Method

// 08 - JS String 'fromCharCode()' Method

// 08 - JS String 'fromCharPoint()' Method

// 09 - JS String 'includes()' Method

// 09 - JS String 'indexOf()' Method

// 10 - JS String 'isWellFormed()' Method

// 10 - JS String 'lastIndexOf()' Method

// 11 - JS String 'length' Method

// 12 - JS String 'localCompare()' Method

// 13 - JS String 'match()' Method

// 14 - JS String 'matchAll()' Method

// 15 - JS String 'normalize()' Method

// 14 - JS String 'padEnd()' Method

// 15 - JS String 'padStart()' Method

// 16 - JS String 'prototype' Method

// 17 - JS String 'raw()' Method

// 17 - JS String 'repeat()' Method

// 18 - JS String 'replace()' Method

// 19 - JS String 'replaceAll()' Method

// 20 - JS String 'search()' Method

// 21 - JS String 'slice()' Method

// 22 - JS String 'split()' Method

// 23 - JS String 'startWith()' Method

// 24 - JS String 'substr()' Method

// 25 - JS String 'substring()' Method

// 26 - JS String 'toLocalLowerCase()' Method

// 27 - JS String 'toLocalUpperCase()' Method

// 28 - JS String 'toLowerCase' Method

// 29 - JS String 'toString()' Method

// 30 - JS String 'toUpperCase' Method

// 31 - JS String 'toWellFormed()' Method

// 32 - JS String 'trim()' Method

// 32 - JS String 'trimEnd()' Method

// 33 - JS String 'trimStart()' Method

// 34 - JS String 'valueOf()' Method






let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;


const name = "jignesh"
const repoCount = 36

//console.log(name + " "+ repoCount);

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Jignesh-Ja-BCA')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-8, 5)
//console.log(anotherString);

const newStringOne = "   jignesh    "
//console.log(newStringOne);
//console.log(newStringOne.trim());

const url = "https://linkedin.com/in/jignesh%20ameta" 

//console.log(url.replace('%20', '-'))

//console.log(url.includes('abcd'));
//console.log(url.includes('jign'));

//console.log(gameName.split('-'));

// create all method programmatically