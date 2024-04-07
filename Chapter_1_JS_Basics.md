# <b>01 - Variables :- 

<span style="font-size:25px;color:red;"><b>1 - var variableName = value</span>

> Can be reassigned and are only available inside the function they're created in. Its function scoped.

<span style="font-size:25px;color:red;"><b>2 - const variableName = value</span>

> Cannot be reassigned and not accessible before 
they appear within the code. Its block scoped.

<span style="font-size:25px;color:red;"><b>3 - let variableName = value</span>

> It can be reassigned but its similar to const i.e. block scoped.

>If variables are not created inside a function or block they are globally scoped.

# <b>02 - JS - Let :- 

>    1 - Block Scope

            Variables declared inside a { } block cannot be accessed from outside the block:
        
>    2 - Global Scope

            Variables declared with the var always have Global Scope.

            Variables declared with the var keyword can NOT have block scope:

            Variables declared with varinside a { } block can be accessed from outside the block:

>    3 - Cannot be Redeclared

            Variables defined with let can not be redeclared.

            You can not accidentally redeclare a variable declared with let.

            With let you can not do this:

                let x = "John Doe";
                let x = 0;

            Variables defined with var can be redeclared.

            With var you can do this:

                var x = "John Doe";
                var x = 0;

>    4 - Redeclaring Variables

            Redeclaring a variable using the var keyword can impose problems.

            Redeclaring a variable inside a block will also redeclare the variable outside the block:

            Redeclaring a variable using the let keyword can solve this problem.

            Redeclaring a variable inside a block will not redeclare the variable outside the block:        

>    5 - What is Good?

            let and const have block scope.

            let and const can not be redeclared.

            let and const must be declared before use.

            let and const does not bind to this.

            let and const are not hoisted.

>    6 - What is Not Good?

            var does not have to be declared.

            var is hoisted.

            var binds to this.

>    7 - Redeclaring

            Redeclaring a JavaScript variable with var is allowed anywhere in a program:

            With let, redeclaring a variable in the same block is NOT allowed:

            Redeclaring a variable with let, in another block, IS allowed:

            

# <b>03 - JS - Const :-

>    1 - Constant Objects and Arrays
            The keyword const is a little misleading.

            It does not define a constant value. It defines a constant reference to a value.

            Because of this you can NOT:

            Reassign a constant value
            Reassign a constant array
            Reassign a constant object
            But you CAN:

            Change the elements of constant array
            Change the properties of constant object

>    2 - What is Good?
            let and const have block scope.

            let and const can not be redeclared.

            let and const must be declared before use.

            let and const does not bind to this.

            let and const are not hoisted.

>    3 - What is Not Good?
            var does not have to be declared.

            var is hoisted.

            var binds to this.

>    4 - Block Scope

            Declaring a variable with const is similar to let when it comes to Block Scope.

>    5 - Redeclaring
            
            Redeclaring a JavaScript var variable is allowed anywhere in a program:

            Redeclaring an existing var or let variable to const, in the same scope, is not allowed:

            Reassigning an existing const variable, in the same scope, is not allowed:

            Redeclaring a variable with const, in another scope, or in another block, is allowed:

>    6 - Hoisting
            Variables defined with var are hoisted to the top and can be initialized at any time.

            Meaning: You can use the variable before it is declared:     

            Variables defined with const are also hoisted to the top, but not initialized.

            Meaning: Using a const variable before it is declared will result in a ReferenceError: