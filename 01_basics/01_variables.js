const accountId = 144553
let accountEmail = "vicky123@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vicky1234@gmail.com"
accountPassword = "4321"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/