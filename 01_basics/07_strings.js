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

// The backticks (`) are used to define a template literal, 
// which allows for embedded expressions.

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
        // The charCodeAt() method of String values returns an integer between 0 and 65535 
        // representing the UTF-16 code unit at the given index.

    // Syntax
        //string.charCodeAt(index)
    
    // Example :-
        {
            let text = "HELLO WORLD";
            let code = text.charCodeAt(0);
            console.log("JS String 'charCodeAt(index)' Method = ",code);
        }

// 04 - JS String 'codePointAt(index)' Method
    // Description
        // The codePointAt() method of String values returns a non-negative integer 
        // that is the Unicode code point value of the character starting at the given index. 
        // Note that the index is still based on UTF-16 code units, not Unicode code points.

    // Syntax
        // string.codePointAt(index)

    // Example :- 
        {
            let text = "HELLO WORLD";
            let code = text.codePointAt(0);
            console.log("JS String 'codePointAt(index)' Method = ", code);
        }    

// 05 - JS String 'concat(string)' Method
    // Description 
        //The concat() method joins two or more strings.
        //The concat() method does not change the existing strings.
        //The concat() method returns a new string.

    // Syntax 
        // string.concat(string1, string2, ...stringX)

    // Example :-
        {
            let text1 = "sea";
            let text2 = "food";
            let result = text1.concat(text2);
        }        

// 06 - JS String 'constructor()' Method
    // Description 
        // The constructor property returns the function that created the String prototype.
        /* For JavaScript strings the constructor returns:
            :-) function String() { [native code] } */

    // Syntax
        // string.constructor

    // Example :- 
        {
            let message = "hello world";
            let text = message.constructor;
            console.log("JS String 'string.constructor' Method = ", text);
        }

// 07 - JS String 'endsWith(searchValue, length)' Method
    // Description
        // The endsWith() method returns true if a string ends with a specified string.
        // Otherwise it returns false.
        // The endsWith() method is case sensitive.
    
    // Syntax
        // string.endsWith(searchValue, length)

    // Example
        {
            let text = "Hello World";
            let result = text.endsWith("World");
            console.log("JS String 'endsWith()' Method = ",result);   // Output : true
        }

// 08 - JS String 'fromCharCode()' Method
    // Description
        // The String.fromCharCode() method converts Unicode values to characters.
        // The String.fromCharCode() is a static method of the String object.
        // The syntax is always String.fromCharCode().        
        // You cannot use myString.fromCharCode().

    // Syntax
        // string.fromCharCode(n1, n2, ..., nX)

    // Example :-
        {
            let char = String.fromCharCode(72, 69, 76, 76, 79);
            console.log("JS String 'String.fromCharCode(72, 69, 76, 76, 79)' Method = ",char);
        }    

// 09 - JS String 'fromCodePoint()' Method
    // Description
        // Because fromCodePoint() is a static method of String, you always use it as String.fromCodePoint(), 
        // rather than as a method of a String value you created. 
        // Unicode code points range from 0 to 1114111 (0x10FFFF). 
        // In UTF-16, each string index is a code unit with value 0 – 65535. 
        // Higher code points are represented by a pair of 16-bit surrogate pseudo-characters. 
        // Therefore, fromCodePoint() may return a string whose length (in UTF-16 code units) is larger than the number of arguments passed. 

    // Syntax
        // string.fromCodePoint(n1, n2, ...., nX)

    // Example :- 
        {
            let result = String.fromCodePoint(9731, 9733, 9842, 0x2f804);            
            console.log("JS String String.fromCodePoint(9731, 9733, 9842, 0x2f804) Method = ",result);
        }

// 10 - JS String 'includes()' Method
    // Description
        // The includes() method returns true if a string contains a specified string.
        // Otherwise it returns false.
        // The includes() method is case sensitive.

    // Syntax
        // string.includes(searchvalue, start)    

    // Example :- 
    {
        let text = "hello world, welcome to the universe.";
        let result = text.includes("world");
        console.log("JS String 'fromCharPoint()' Method = ",result);
    }

// 11 - JS String 'indexOf()' Method
    // Description 
        // The indexOf() method returns the position of the first occurrence of a value in a string.
        // The indexOf() method returns -1 if the value is not found.
        // The indexOf() method is case sensitive.

    // Syntax    
        // string.indexOf(searchValue, Start)

    // Example :-
        {
            const paragraph = "I think Ruth's dog is cuter than you dog!";
            const searchTerm = 'dog';
            const indexOfFirst = paragraph.indexOf(searchTerm);

            console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
            //Expected Output: "The index of the first "dog" is 15

            console.log(
                `The index of the second "${searchTerm}" is ${paragraph.indexOf(
                searchTerm,
                indexOfFirst + 1,
                )}`,
            );
            // Expected Output: "The index of the second "dog" is 38"
        }    

    /* The Differense Between String indexOf() and String search() */
        // The indexOf() method cannot search against a regular expression.
        // The search() cannot take a start position argument.

// 12 - JS String 'isWellFormed()' Method
    // Description 
        // isWellFormed() allows you to test whether a string is well-formed (i.e. does not contain any lone surrogates). 
        // Compared to a custom implementation, isWellFormed() is more efficient, 
        // as engines can directly access the internal representation of strings. 
        // If you need to convert a string to a well-formed string, use the toWellFormed() method. 
        // isWellFormed() allows you to handle ill-formed strings differently from well-formed strings, 
        // such as throwing an error or marking it as invalid.

    // Syntax
        // isWellFormed()

    // Example :- 
        {
            const strings = [
                // Lone leading surrogate
                "ab\uD800",
                "ab\uD800c",
                // Lone trailing surrogate
                "\uDFFFab",
                "c\uDFFFab",
                // Well-formed
                "abc",
                "ab\uD83D\uDE04c",
              ];
              
              for (const str of strings) {
                console.log("JS String str.isWellFormed() Method = ",str.isWellFormed());
              }
              // Logs:
                // false
                // false
                // false
                // false
                // true
                // true
        }

// 13 - JS String 'lastIndexOf()' Method
    // Description
        // The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
        // The lastIndexOf() method searches the string from the end to the beginning.
        // The lastIndexOf() method returns the index from the beginning (position 0).
        // The lastIndexOf() method returns -1 if the value is not found.
        // The lastIndexOf() method is case sensitive.

    // Syntax 
        // string.lastIndexOf(searchValue, Start)

    // Example :- 
        {
            const paragraph = "I thinkg Ruth's dog is cuter than your dog!";
            const searchTerm = 'dog';
            console.log(
                `Index of the last "${searchTerm}" is ${paragraph.lastIndexOf(searchTerm)}`,
            );
        }

// 14 - JS String 'length' Method

// 15 - JS String 'localCompare()' Method

// 16 - JS String 'match()' Method

// 17 - JS String 'matchAll()' Method

// 18 - JS String 'normalize()' Method

// 19 - JS String 'padEnd()' Method

// 20 - JS String 'padStart()' Method

// 21 - JS String 'prototype' Method

// 22 - JS String 'raw()' Method

// 23 - JS String 'repeat()' Method

// 24 - JS String 'replace()' Method

// 25 - JS String 'replaceAll()' Method

// 26 - JS String 'search()' Method

// 27 - JS String 'slice()' Method

// 28 - JS String 'split()' Method

// 29 - JS String 'startWith()' Method

// 30 - JS String 'substr()' Method

// 31 - JS String 'substring()' Method

// 32 - JS String 'toLocalLowerCase()' Method

// 33 - JS String 'toLocalUpperCase()' Method

// 34 - JS String 'toLowerCase' Method

// 35 - JS String 'toString()' Method

// 36 - JS String 'toUpperCase' Method

// 37 - JS String 'toWellFormed()' Method

// 38 - JS String 'trim()' Method

// 39 - JS String 'trimEnd()' Method

// 40 - JS String 'trimStart()' Method

// 41 - JS String 'valueOf()' Method






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