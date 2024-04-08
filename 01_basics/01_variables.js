/*JS and Camel Case
01 - Pascal Case :- We can create variable likes SmartWatch,MobileDevie,WebDriver etc. 
    It Represent the upper camel case string.

02 - Lower Camel Case :- JS allows to use variable names and expression names likes
    smartWatch, mobileDevice, webDriver etc.

03 - Under Score :-  we can use underscore while declaring variables likes smar_watch, mobile_device,
    web_driver etc.
*/

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