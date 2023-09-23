"use strict"

const accountId = 1234
let accountEmail = "shuvrowritescode@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState

//accountId = 2 //Not Allowed

accountEmail = "SWC@gmail.com"
accountPassword = "987"
accountCity = "Delhi"

/* 
    Preffered not to use var
    because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])