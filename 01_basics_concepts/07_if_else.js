/* The JavaScript if-else statement */
/*
    // The JavaScript if-else statement is used to execute the code whether condition is true or false. 
    // There are three forms of if statement in JavaScript.

    :-) If Statement
    :-) If else statement
    :-) if else if statement

*/

/*  01 - If Statement */
    // Description 
        // It evaluates the content only if expression is true inside the block scope.
    
    // Synatx 
        /* if (expression) {
                // content to be evaluated
            }
        */

    // Example :- 
        {
            let a = 10;
            let b = 24;
            if ( a < b) {
                console.log("condition is true a = 10 < b = 20"); // only give output when condition is true;
            }
        }
    
/* 02 - If - Else Statement */
    // Discription 
        // The if-else evaluates the content only to specify a block of code(true statement) to be executed if the condition is true.
        // Otherwise the false statement is executed

    // Syntax
        /* if(expression) {
                // true statement to be executed
            } else {
                // false statement to be executed
            }
        */
    
    //  Example :-
        {
            let a = 10;
            let b = 24;
            if ( a > b) {
                console.log("condition is true a = 10 < b = 20"); // only give output when condition is true;
            } else {
                console.log("condition is false a = 10 > b = 20"); // only give output when condition is false;
            }
        }

/* 02 - If - Else - If Statement */
    // Discription 
        // It evaluates the content only if expression is true from several expression or condition.
    
    // Syntax 
        /* if(expression1) {
                // content to be evaluated if expression1 is true  
            } else if(expression2) {
                //content to be evaluated if expression2 is true  
            } else if(expression3) {
                //content to be evaluated if expression3 is true  
            } else if(expression4) {
                //content to be evaluated if expression4 is true  
            } else {
                //content to be evaluated if no expressions is true  
            }
        */

    // Example :-
        {
            let a = 10;
            let b = 24;
            if ( a < b) {
                console.log("condition1 is true a = 10 < b = 20"); // only give output when condition1 is true;
            } else if ( a > b) {
                console.log("condition2 is true a = 10 > b = 20"); // only give output when condition2 is true;
            } else if ( a = b) {
                console.log("condition3 is true a = 10 = b = 20"); // only give output when condition3 is true;
            } else if ( a == b) {
                console.log("condition4 is ture a = 10 == b = 20"); // only give output when condition4 is true;
            } else {
                console.log("No conditions is true "); // only give output when no condition is true;
            }
        }