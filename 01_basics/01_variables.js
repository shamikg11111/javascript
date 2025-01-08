// variables and constants in  js 
// constants in js are represented by const
const accountId= 14443
let accountEmail= "shamikg11@gmail.com"
var accPassword= "12334"
accountCity = "Kolkata" // this is allowed but never use this because it reduces readability 
let accountState ; // no value is mentioned so when we print this, it will show "undefined"

//accountId=2 // not allowed as const value remains the same throughout the program

console.log(accountId);
accountEmail="sg@gmail.com"
accPassword="22222"
accountCity="bangalore"

// instead of using console.log 3 times for all the changed values we use console.table

console.table([accountId,accountEmail,accPassword,accountCity,accountState]) // dont forget to include the square brackets else terminal will throw error

// initially js did not work on scope but nowadays it works on it 
/*
prefer not to use var as it has issues in block and functional scope
only use const and let 

*/