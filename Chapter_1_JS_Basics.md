# <b>Variables

<span style="font-size:25px;color:red;"><b>1 - var variableName = value</span>

> Can be reassigned and are only available inside the function they're created in. Its function scoped.

<span style="font-size:25px;color:red;"><b>2 - const variableName = value</span>

> Cannot be reassigned and not accessible before 
they appear within the code. Its block scoped.

<span style="font-size:25px;color:red;"><b>3 - let variableName = value</span>

> It can be reassigned but its similar to const i.e. block scoped.

>If variables are not created inside a function or block 
they are globally scoped.

# <b>JS - Const :-

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