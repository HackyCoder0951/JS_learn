/*

JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic operations on the operands. 

The following operators are known as JavaScript arithmetic operators.

Operator	Description	        Example
+	        Addition	        10+20 = 30
-	        Subtraction	        20-10 = 10
*	        Multiplication	    10*20 = 200
/	        Division	        20/10 = 2
%	        Modulus (Remainder)	20%10 = 0
++	        Increment	        var a=10; a++; Now a = 11
--	        Decrement	        var a=10; a--; Now a = 9/

*/ 
// Examples of JS Arithmetic Operations:- 
console.log("\nExamples of JS Arithmetic Operations:- "); 
console.log("\nAddition of 10 + 20) = ",10 + 20); //Addition
console.log("Subtract of 10 - 20 = ",10 - 20); //Subtract
console.log("Multiplication of 10 - 20 = ",10 - 20); //Multiplication
console.log("Division of 10 / 20 = ",10 / 20); //Division
console.log("Modulus or Removal of 10 % 20 = ",10 % 20); //Removal
{
    let a = 10;
     a++; //Increments value by one, now a is 11
    console.log("Increments value by one a = 10; a++; = ",a);
}
{
    let a = 10;
     a--; //Decrements value by one, now a is 9
    console.log("Decrements value by one a = 10; a--; = ",a);
    }

/* 

JavaScript Comparison Operators
The JavaScript comparison operator compares the two operands. 

The comparison operators are as follows:

Operator	    Description	                            Example
==	            Is equal to	                            10==20 = false
===	            Identical (equal and of same type)	    10==20 = false
!=	            Not equal to	                        10!=20 = true
!==     	    Not Identical	                        20!==20 = false
>	            Greater than	                        20>10 = true
>=	            Greater than or equal to	            20>=10 = true
<	            Less than	                            20<10 = false
<=	            Less than or equal to	                20<=10 = false

*/
//Examples of comparision Operators:-
console.log("\nExamples of comparision Operators:-"); 
console.log("\nIs Equal to 10 == 20 = ",10 == 20); // Is Equal to
console.log("Identical (equal and of same type) 10 == 20 = ",10 == 20);  // Identical (equal and of same type)
console.log("Not Equal to 10 != 20 = ",10 != 20); // Not Equal to 
console.log("Not Identical to 20 !== 20 = ",20 !== 20); // Not Identical to 
console.log("Greater than 20 > 10 = ",20 > 10); // Greater than
console.log("Greater than or equal to 20 >= 10 = ",20 >= 10); // Greater than or equal to
console.log("Less than 20 < 10 = ",20 < 10); // Less than
console.log("Less than or equal to 20 <= 10 = ",20 <= 10); // Less than or equal to

/*

JavaScript Bitwise Operators
The bitwise operators perform bitwise operations on operands. 

The bitwise operators are as follows:

Operator	    Description	                    Example
&	            Bitwise AND	                    (10==20 & 20==33) = false
|	            Bitwise OR	                    (10==20 | 20==33) = false
^	            Bitwise XOR	                    (10==20 ^ 20==33) = false
~	            Bitwise NOT	                    (~10) = -10
<<	            Bitwise Left Shift	            (10<<2) = 40
>>	            Bitwise Right Shift	            (10>>2) = 2
>>>	            Bitwise Right Shift with Zero	(10>>>2) = 2

*/
//Examples of Bitwise Operators:-
console.log("\nExamples of Bitwise Operators:-"); 
console.log("\nBitwise AND of 10 == 20 & 20 == 30 = ",10 == 20 & 20 == 30); // Bitwise AND
console.log("Bitwise OR of 10 == 20 | 20 == 30 = ",10 == 20 | 20 == 30); // Bitwise OR
console.log("Bitwise XOR of 10 == 20 ^ 20 == 30 = ",10 == 20 ^ 20 == 30); // Bitwise XOR
console.log("Bitwise NOT of ~10 = ",~10); // Bitwise NOT
console.log("Bitwise Left Shift of 10 << 30 = ",10 << 30); // Bitwise Left Shift
console.log("Bitwise Right Shift of 10 >> 30 = ",10 >> 30); // Bitwise Right Shift
console.log("Bitwise Right Shift with Zero of 10 >>> 30 = ",10 >>> 30); // Bitwise Right Shift with Zero

/*
JavaScript Logical Operators
The following operators are known as JavaScript logical operators.

Operator	    Description	    Example
&&	            Logical AND	    (10==20 && 20==33) = false
||	            Logical OR	    (10==20 || 20==33) = false
!	            Logical Not	    !(10==20) = true

*/
//Examples of Logical Operators:-
console.log("\nExamples of Logical Operators:-"); 
console.log("\nLogical AND of 10 == 20 && 20 == 30 = ",10 == 20 && 20 == 30); // Logical AND
console.log("Logical OR of 10 == 20 || 20 == 30 = ",10 == 20 || 20 == 30); // Logical OR
console.log("Logical NOT of !(10 == 20) = ",!(10 == 20)); // Logical NOT

/*

JavaScript Assignment Operators
The following operators are known as JavaScript assignment operators.

Operator	    Description	            Example
=	            Assign	                10+10 = 20
+=	            Add and assign	        var a=10; a+=20; Now a = 30
-=	            Subtract and assign	    var a=20; a-=10; Now a = 10
*=	            Multiply and assign	    var a=10; a*=20; Now a = 200
/=	            Divide and assign	    var a=10; a/=2; Now a = 5
%=	            Modulus and assign	    var a=10; a%=2; Now a = 0

*/
//Examples of Assignment Operators:-
console.log("\nExamples of Assignment Operators:-"); 
{
    let a = 10, b = 20, c = a +b;
    console.log("\nAssign of = ",c); // Assign
}
{
    let a = 10; a += 10;
    console.log("Add and Assign of = ",a); // Add and Assign
}
{
    let a = 10; a -= 10; 
    console.log("Subtract and Assign of = ",a); // Subtract and Assign
}
{
    let a = 10; a *= 10; 
    console.log("Multiply and Assign of = ",a); // Multiply and Assign
}
{
    let a = 10; a /= 10; 
    console.log("Divide and Assign of = ",a); // Divide and Assign
}
{
    let a = 10; a %= 10; 
    console.log("Modulus and Assign of = ",a); // Modulus and Assign
}

/*

JavaScript Special Operators
The following operators are known as JavaScript special operators.

Operator	    Description
(?:)	        Conditional Operator returns value based on the condition. It is like if-else.
,	            Comma Operator allows multiple expressions to be evaluated as single statement.
delete	        Delete Operator deletes a property from the object.
in	            In Operator checks if object has the given property
instanceof	    checks if the object is an instance of given type
new	            creates an instance (object)
typeof	        checks the type of object.
void	        it discards the expression's return value.
yield	        checks what is returned in a generator by the generator's iterator.

*/
//Examples of Special Operators:-
console.log("\nExamples of Special Operators:-"); 
console.log("Ternary Operator (?:) of result = (10 > 0) ? true : false = ",result = (10 > 0) ? true : false);  // Ternary Operator
console.log("Ternary Operator (?:) of message = (20 > 15) ? 'Yes' : 'No' = ",message = (20 > 15) ? "Yes" : "No");  // Ternary Operator

{
    let a=10,b=20,c=a+b;
    console.log("Comma Operator ',' = ", c); // Comma Operator
}

{
    let emp = {  
        firstName: "Raj",  
        lastName: "Kumar",  
        salary: 40000  
    }                               // Delete Operator
    console.log("\nBefore Delete Operation = ",emp);   
    console.log(delete emp.salary); 
    console.log("\nAfter Delete Operation = ", emp);
}

{

    function gfg() {        // In Operator
        // Illustration of in operator 
        const array = ['geeks', 'for', 'geeks']
    
        // Output of the indexed number 
        console.log("\nOutput of the indexed number = ", 0 in array);

        // Output of the Value 
        console.log("Output of the Value = ", 'for' in array);
    
        // output of the Array property 
        console.log("output of the Array property = ", 'length' in array);
    }
    gfg();
}

{
    var myString = new String();
    var myDate = new Date();
                                                // instanceof Operator
    console.log("\ninstanceof Operator = ", myString instanceof Object);
    console.log("instanceof Operator = ",myString instanceof Date);
    console.log("instanceof Operator = ",myString instanceof String);
    console.log("instanceof Operator = ",myDate instanceof Date);
    console.log("instanceof Operator = ",myDate instanceof Object);
    console.log("instanceof Operator = ",myDate instanceof String);
}

{
    /*typeof Operator*/
    // Define variables with different primitive data types 
    const num = 10; 
    const str = "Hello"; 
    const bool = true; 
    const undef = undefined; 
    const nul = null; 
    const sym = Symbol("symbol"); 
    const bigInt = 9007199254740991n; 
    
    // Use typeof operator to determine the data type 
    console.log("\nOutput: 'number' = ",typeof num);   // Output: "number" 
    console.log("\nOutput: 'string' = ",typeof str);   // Output: "string" 
    console.log("\nOutput: 'boolean' = ",typeof bool);  // Output: "boolean" 
    console.log("\nOutput: 'undefined' = ",typeof undef); // Output: "undefined" 
    console.log("\nOutput: 'object' = ",typeof nul);   // Output: "object" (typeof null is an oddity,// it returns "object") 
    console.log("\nOutput: 'symbol' = ",typeof sym);   // Output: "symbol" 
    console.log("\nOutput: 'bigint' = ",typeof bigInt);// Output: "bigint" 
}

{
    function foo() {  // Void Operator
        return void 0; 
    } 
    console.log("\nVoid Operator = ", foo()); 
}

{
    /*yield Operator */
    function* generator() { 
        const value = yield 1; 
        console.log("\nyield Operator = ",value); 
    } 
    
    const iter = generator(); 
    
    iter.next(); 
    iter.next('hello');
}