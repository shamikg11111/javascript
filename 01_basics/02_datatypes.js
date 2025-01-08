"use strict"  // once you use this , the system treats all the code as the newer version of js 

//alert(3+3)    // error comes as we are using node.js and not the web browser (js engine is present in the browser )
// so alert cannot be used in node.js but van be used in browser 

// data types

// PRIMITIVE DATA TYPES  

// number =>  range - 2^53 
let age = 23
// bigint => used to store big numbers ( double in java)

let name= "shamik"// string => "" 
let isLoggedIn= false // boolean => true/false

let state = null // null => is a standalone value , is arepresentation of an empty value 
let tests // undefined => appears when the value is not assigned to the variable 
// symbol =>unique 

// typeof gives the datatype 
// for eg 
console.log( typeof name)
console.log( typeof undefined) // the type of undefined is undefined itself
console.log( typeof null) // the type of null is object ****
