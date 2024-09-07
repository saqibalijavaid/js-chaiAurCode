const accountId = 144553
let accountEmail = "saqib@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore" // never declare variable this way
let accountState;

// We can declare variables in two ways
// 1) let 2) var
// But we don't use var in js


// accountId = 2 // Not Allowed
accountEmail = "aly@gmail.com"
accountPassword = "678910"
accountCity = "Isb"

console.log(accountId);

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
