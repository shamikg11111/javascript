let score = "33abc"
// different ways to show the datatype of the variable
console.log( typeof score);
console.log( typeof(score));
// now to convert string to number 
let stringtonum= Number(score)// when we want to convert string to number use "Number"
console.log(stringtonum)
// now if we want to convert number to string 
let score1="33"
let no_tostring= String(score1)
console.log(no_tostring)
// so when we want string to be converted into number then 
// "33"=> 33
//"33abc"=> NAN ( not in number)
// true => 1; false => 0


// now if we want to convert a string to boolean 
 let islog= "shamik"
 let booleanislog= Boolean(islog)
 console.log(booleanislog)// returns true 

  
// for an empty string
 let islog1= ""
 let booleanislog1= Boolean(islog1)
 console.log(booleanislog1) // return false
