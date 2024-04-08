const accountId = 245005;  // constant value reference
let accountEmail = "jignesh.vision@google.com" // variable declaration using let
var accountPassword = "12345" // variable declaration using var that is not preferred 
accountCIty = "Chittorgarh" // only for testing purposes
let accountState; // JS assumes this is an undefined value

//accountId = 2 // constant value cannot be changeble  


accountEmail = "tech@google.com"
accountPassword = "2121212121"
accountCIty = "Jaipur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCIty,accountState])