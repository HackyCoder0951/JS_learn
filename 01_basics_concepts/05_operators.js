/* 
    // Operators

    Unary :-> An operator is unary if it has a single operand. 
        #:- For example, the unary negation - reverses the sign of a number:
            let x = 1;
            x = -x;
            alert( x ); // -1, unary negation was applied

    Binary :- An operator is binary if it has two operands. The same minus exists in binary form as well:
            let x = 1, y = 3;
            alert( y - x ); // 2, binary minus subtracts values

    Operand :- An operand – is what operators are applied to. 
                For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 
                    and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

*/

/*
    The following table lists operators in order from highest precedence (18) to lowest precedence (1).

    Several general notes about the table:

    01 - Not all syntax included here are "operators" in the strict sense. 
            For example, spread ... and arrow => are typically not regarded as operators. 
            However, we still included them to show how tightly they bind compared to other operators/expressions.
    02 - Some operators have certain operands that require expressions narrower 
            than those produced by higher-precedence operators. 
            For example, the right-hand side of member access . (precedence 17) must be an identifier 
            instead of a grouped expression. The left-hand side of arrow => (precedence 2) 
            must be an arguments list or a single identifier instead of some random expression.
    03 - Some operators have certain operands that accept expressions wider 
            than those produced by higher-precedence operators. 
            For example, the bracket-enclosed expression of bracket notation [ … ] (precedence 17) 
            can be any expression, even comma (precedence 1) joined ones. These operators act as if 
            that operand is "automatically grouped". In this case we will omit the associativity.

 */

/*  // Operator Precedence Table
/       :-> Operator precedence determines how operators are parsed concerning each other. 
                Operators with higher precedence become the operands of operators with lower precedence.
Precedence	            Associativity	    Individual operators	    Notes
-------------------------------------------------------------------------------
18:grouping	            n/a	                Grouping
                                            (x)	                            [1]
-------------------------------------------------------------------------------
17:access and call	    left-to-right	    Member access
                                            x.y	                            [2]
                                        ---------------------------------------
                                            Optional chaining
                                            x?.y
                        -------------------------------------------------------
                        n/a	                Computed member access
                                            x[y]	                        [3]
                                        ---------------------------------------
                                            new with argument list
                                            new x(y)	                    [4]
                                        ---------------------------------------    
                                            Function call
                                            x(y)
                                        ---------------------------------------
                                            import(x)
-------------------------------------------------------------------------------
16:new	                n/a	                new without argument list
                                            new x
-------------------------------------------------------------------------------                                    
15:postfix operators	n/a	                Postfix increment
                                            x++	                            [5]
                                        ---------------------------------------
                                            Postfix decrement
                                            x--
-------------------------------------------------------------------------------
14:prefix operators	    n/a	                Prefix increment
                                            ++x	                            [6]
                                        ---------------------------------------
                                            Prefix decrement
                                            --x
                                        ---------------------------------------
                                            Logical NOT
                                            !x
                                        ---------------------------------------
                                            Bitwise NOT
                                            ~x
                                        ---------------------------------------
                                            Unary plus
                                            +x
                                        ---------------------------------------
                                            Unary negation
                                            -x
                                        ---------------------------------------
                                            typeof x
                                        ---------------------------------------
                                            void x
                                        ---------------------------------------
                                            delete x	                    [7]
                                        ---------------------------------------
                                            await x
-------------------------------------------------------------------------------
13:exponentiation	    right-to-left	    Exponentiation
                                            x ** y	                        [8]
-------------------------------------------------------------------------------
12:multiplicative 	    left-to-right	    Multiplication
                                            x * y
                                        ---------------------------------------
                                            Division
                                            x / y
                                        ---------------------------------------
                                            Remainder
                                            x % y
-------------------------------------------------------------------------------
11:additive  	        left-to-right	    Addition
                                            x + y
                                        ---------------------------------------
                                            Subtraction
                                            x - y
-------------------------------------------------------------------------------
10:bitwise shift	    left-to-right	    Left shift
                                            x << y
                                        ---------------------------------------
                                            Right shift
                                            x >> y
                                        ---------------------------------------
                                            Unsigned right shift
                                            x >>> y
-------------------------------------------------------------------------------                                        
9:relational  	        left-to-right	    Less than
                                            x < y
                                        ---------------------------------------
                                            Less than or equal
                                            x <= y
                                        ---------------------------------------
                                            Greater than
                                            x > y
                                        ---------------------------------------
                                            Greater than or equal
                                            x >= y
                                        ---------------------------------------
                                            x in y
                                        ---------------------------------------
                                            x instanceof y
-------------------------------------------------------------------------------                                        
8:equality  	        left-to-right	    Equality
                                            x == y
                                        ---------------------------------------
                                            Inequality
                                            x != y
                                        ---------------------------------------
                                            Strict equality
                                            x === y
                                        ---------------------------------------
                                            Strict inequality
                                            x !== y
-------------------------------------------------------------------------------                                        
7: bitwise AND	        left-to-right	    Bitwise AND
                                            x & y
-------------------------------------------------------------------------------
6: bitwise XOR	        left-to-right	    Bitwise XOR
                                            x ^ y
-------------------------------------------------------------------------------
5: bitwise OR	        left-to-right	    Bitwise OR
                                            x | y
-------------------------------------------------------------------------------
4: logical AND	        left-to-right	    Logical AND
                                            x && y
-------------------------------------------------------------------------------
3: logical OR,          left-to-right	    Logical OR
nullish coalescing	                        x || y                                        
                                        ---------------------------------------                              
                                            Nullish coalescing operator
                                            x ?? y	                        [9]
-------------------------------------------------------------------------------                                        
2: assignment 	        right-to-left	    Assignment
and miscellaneous                           x = y	                        [10]
                                        ---------------------------------------
                                            Addition assignment
                                            x += y
                                        ---------------------------------------
                                            Subtraction assignment
                                            x -= y
                                        ---------------------------------------
                                            Exponentiation assignment
                                            x **= y
                                        ---------------------------------------
                                            Multiplication assignment
                                            x *= y
                                        ---------------------------------------
                                            Division assignment
                                            x /= y
                                        ---------------------------------------
                                            Remainder assignment
                                            x %= y
                                        ---------------------------------------
                                            Left shift assignment
                                            x <<= y
                                        ---------------------------------------
                                            Right shift assignment
                                            x >>= y
                                        ---------------------------------------
                                            Unsigned right shift assignment
                                            x >>>= y
                                        ---------------------------------------
                                            Bitwise AND assignment
                                            x &= y
                                        ---------------------------------------             
                                            Bitwise XOR assignment
                                            x ^= y
                                        ---------------------------------------
                                            Bitwise OR assignment
                                            x |= y
                                        ---------------------------------------
                                            Logical AND assignment
                                            x &&= y
                                        ---------------------------------------
                                            Logical OR assignment
                                            x ||= y
                                        ---------------------------------------
                                            Nullish coalescing assignment
                                            x ??= y
                        -------------------------------------------------------
                        right-to-left	    Conditional (ternary) operator
                                            x ? y : z                       [11]
                        -------------------------------------------------------
                        right-to-left	    Arrow
                                            x => y	                        [12]
                        -------------------------------------------------------
                        n/a	                yield x
                                        ---------------------------------------
                                            yield* x
                                        ---------------------------------------
                                            Spread
                                            ...x	                        [13]
-------------------------------------------------------------------------------
1:comma	                left-to-right	    Comma operator
                                            x, y
-------------------------------------------------------------------------------                                        

    //Notes:

        01 -    The operand can be any expression.
        02 -    The "right-hand side" must be an identifier.
        03 -    The "right-hand side" can be any expression.
        04 -    The "right-hand side" is a comma-separated list of any expression with precedence > 1  
                    (i.e. not comma expressions).
        05 -    The operand must be a valid assignment target (identifier or property access). 
                    Its precedence means new Foo++ is (new Foo)++ (a syntax error) 
                        and not new (Foo++) (a TypeError: (Foo++) is not a constructor).
        06 -    The operand must be a valid assignment target (identifier or property access).
        07 -    The operand cannot be an identifier or a private property access.
        08 -    The left-hand side cannot have precedence 14.
        09 -    The operands cannot be a logical OR || or logical AND && operator without grouping.
        10 -    The "left-hand side" must be a valid assignment target (identifier or property access).
        11 -    The associativity means the two expressions after ? are implicitly grouped.
        12 -    The "left-hand side" is a single identifier or a parenthesized parameter list.
        13 -    Only valid inside object literals, array literals, or argument lists.
*/

// Short-circuiting
/* Short-circuiting is jargon for conditional evaluation. 
    For example, in the expression a && (b + c), if a is falsy, 
        then the sub-expression (b + c) will not even get evaluated, 
        even if it is grouped and therefore has higher precedence than &&. 
        We could say that the logical AND operator (&&) is "short-circuited". 
        Along with logical AND, other short-circuited operators include logical OR (||), 
        nullish coalescing (??), and optional chaining (?.). 
      
        a || (b * c); // evaluate `a` first, then produce `a` if `a` is "truthy"
        a && (b < c); // evaluate `a` first, then produce `a` if `a` is "falsy"
        a ?? (b || c); // evaluate `a` first, then produce `a` if `a` is not `null` and not `undefined`
        a?.b.c; // evaluate `a` first, then produce `undefined` if `a` is `null` or `undefined`    
*/


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
--	        Decrement	        var a=10; a--; Now a = 9
**          Exponentiation      x = 10 ** 2
    // ** is the exponentiation operator and is the equivalent of Math.powe  
    // it was introduced in ECMAScript 2016 (ES7)  

**=         Exponentiation assignment   var x = 10; console.log(x **= 2); Now a =  100

    // x **= y is equivalent to x = x ** y, except that the expression x is only evaluated once.
 

*/ 
// Examples of JS Arithmetic Operations:- 
console.log("\nExamples of JS Arithmetic Operations:- "); 
console.log("\n01 - Addition of 10 + 20) = ",10 + 20); //Addition
console.log("02 - Subtract of 10 - 20 = ",10 - 20); //Subtract
console.log("03 - Multiplication of 10 - 20 = ",10 - 20); //Multiplication
console.log("04 - Division of 10 / 20 = ",10 / 20); //Division
console.log("05 - Modulus or Removal of 10 % 20 = n ",10 % 20); //Removal
{
    let a = 10;
     a++; //Increments value by one, now a is 11
    console.log("06 - Increments value by one a = 10; a++; = ",a);
}
{
    let a = 10;
     a--; //Decrements value by one, now a is 9
    console.log("07 - Decrements value by one a = 10; a--; = ",a);
}
{
    let x = 10;
    if (x > 5) {
        x = 10 ** 2;
    }
    console.log("08 - Exponentiation value of x = 10 ** 2 is = ",x);
}
{
    let x = 10;
    console.log("09 - Exponentiation assignment value of var x = 10; console.log(x **= 2); is = ",x);
    // need to recheck conceptually
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
console.log("\n01 - Is Equal to 10 == 20 = ",10 == 20); // Is Equal to
console.log("02 - Identical (equal and of same type) 10 == 20 = ",10 == 20);  // Identical (equal and of same type)
console.log("03 - Not Equal to 10 != 20 = ",10 != 20); // Not Equal to 
console.log("04 - Not Identical to 20 !== 20 = ",20 !== 20); // Not Identical to 
console.log("05 - Greater than 20 > 10 = ",20 > 10); // Greater than
console.log("06 - Greater than or equal to 20 >= 10 = ",20 >= 10); // Greater than or equal to
console.log("07 - Less than 20 < 10 = ",20 < 10); // Less than
console.log("08 - Less than or equal to 20 <= 10 = ",20 <= 10); // Less than or equal to

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
//Examples of Bitwise Operators:-       // need to check conceptually
console.log("\nExamples of Bitwise Operators:-"); 
console.log("\n01 - Bitwise AND of 10 == 20 & 20 == 30 = ",10 == 20 & 20 == 30); // Bitwise AND
console.log("02 - Bitwise OR of 10 == 20 | 20 == 30 = ",10 == 20 | 20 == 30); // Bitwise OR
console.log("03 - Bitwise XOR of 10 == 20 ^ 20 == 30 = ",10 == 20 ^ 20 == 30); // Bitwise XOR
console.log("04 - Bitwise NOT of ~10 = ",~10); // Bitwise NOT
console.log("05 - Bitwise Left Shift of 10 << 30 = ",10 << 30); // Bitwise Left Shift
console.log("06 - Bitwise Right Shift of 10 >> 30 = ",10 >> 30); // Bitwise Right Shift
console.log("07 - Bitwise Right Shift with Zero of 10 >>> 30 = ",10 >>> 30); // Bitwise Right Shift with Zero

/*
JavaScript Logical Operators
The following operators are known as JavaScript logical operators.

Operator	    Description	    Example
&&	            Logical AND	    (10==20 && 20==33) = false
||	            Logical OR	    (10==20 || 20==33) = false
!	            Logical Not	    !(10==20) = true

*/
//Examples of Logical Operators:-       // need to check conceptually
console.log("\nExamples of Logical Operators:-"); 
console.log("\n01 - Logical AND of 10 == 20 && 20 == 30 = ",10 == 20 && 20 == 30); // Logical AND
console.log("02 - Logical OR of 10 == 20 || 20 == 30 = ",10 == 20 || 20 == 30); // Logical OR
console.log("03 - Logical NOT of !(10 == 20) = ",!(10 == 20)); // Logical NOT

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
    console.log("\n01 - Assign of = ",c); // Assign
}
{
    let a = 10; a += 10;
    console.log("02 - Add and Assign of = ",a); // Add and Assign
}
{
    let a = 10; a -= 10; 
    console.log("03 - Subtract and Assign of = ",a); // Subtract and Assign
}
{
    let a = 10; a *= 10; 
    console.log("04 - Multiply and Assign of = ",a); // Multiply and Assign
}
{
    let a = 10; a /= 10; 
    console.log("05 - Divide and Assign of = ",a); // Divide and Assign
}
{
    let a = 10; a %= 10; 
    console.log("06 - Modulus and Assign of = ",a); // Modulus and Assign
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
console.log("\n01 - Ternary Operator (?:) of result = (10 > 0) ? true : false = ",result = (10 > 0) ? true : false);  // Ternary Operator
console.log("02 - Ternary Operator (?:) of message = (20 > 15) ? 'Yes' : 'No' = ",message = (20 > 15) ? "Yes" : "No");  // Ternary Operator

{
    let a=10,b=20,c=a+b;
    console.log("03 - Comma Operator 'let a=10,b=20,c=a+b;' = ", c); // Comma Operator
}

{
    let emp = {  
        firstName: "Raj",  
        lastName: "Kumar",  
        salary: 40000  
    }                               // Delete Operator
    console.log("\n04 - Before Delete Operation = ",emp);   
    console.log("04.1 - While Delete Operation = ",delete emp.salary); 
    console.log("04.2 - After Delete Operation = ", emp);
}

{

    function gfg() {        // In Operator
        // Illustration of in operator 
        const array = ['geeks', 'for', 'geeks'] 
        // Output of the indexed number 
        console.log("\n05 - Output of the indexed number = ", 0 in array);
        // Output of the Value 
        console.log("05.1 - Output of the Value = ", 'for' in array);  
        // output of the Array property 
        console.log("05.2 - output of the Array property = ", 'length' in array);
    }
    gfg();
}

{
    var myString = new String();
    var myDate = new Date();           // instanceof Operator                                
    console.log("\n06 - Output of instanceof Operator = ", myString instanceof Object); 
    console.log("06.1 - Output of instanceof Operator = ",myString instanceof Date);
    console.log("06.2 - Output of instanceof Operator = ",myString instanceof String);
    console.log("06.3 - Output of instanceof Operator = ",myDate instanceof Date);
    console.log("06.4 - Output of instanceof Operator = ",myDate instanceof Object);
    console.log("06.5 - Output of instanceof Operator = ",myDate instanceof String);
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
    console.log("\n07 - Output of typeof Operator: 'number' = ",typeof num);   // Output: "number" 
    console.log("07.1 - Output  of typeof Operator: 'string' = ",typeof str);   // Output: "string" 
    console.log("07.2 - Output  of typeof Operator: 'boolean' = ",typeof bool);  // Output: "boolean" 
    console.log("07.3 - Output  of typeof Operator: 'undefined' = ",typeof undef); // Output: "undefined" 
    console.log("07.4 - Output  of typeof Operator: 'null' = ",typeof nul);   // Output: "object" (typeof null is an oddity,// it returns "object") 
    console.log("07.5 - Output  of typeof Operator: 'symbol' = ",typeof sym);   // Output: "symbol" 
    console.log("07.6 - Output  of typeof Operator: 'bigint' = ",typeof bigInt);// Output: "bigint" 
}

{
    function foo() {  // Void Operator
        return void 0; 
    } 
    console.log("\n08 - Void Operator return void 0; = ", foo()); 
}

{
    /*yield Operator */
    function* generator() { 
        const value = yield 1; 
        console.log("\n09 - yield Operator 'const value = yield 1;' = ",value); 
    }   
    const iter = generator();  
    iter.next(); 
    iter.next('hello');
    console.log("\n");
}