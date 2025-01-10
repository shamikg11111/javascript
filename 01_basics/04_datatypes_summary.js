// on the basis of how the data is stored in the memory and how its accessed from the memory, data is classfied into 2 types
// 1) primitive 2) non primitive 
// Primitive- String, Number, boolean, null, undefined, Symbol( to make a value unique),Bigint
// eg of symbol -
 const id= Symbol("123")
 const another_id= Symbol("123")
 console.log(id== another_id) // returns false as id and another_id are not the same even if they have the same values
 // eg of bigint
 const bigno=123456789n // when we append 'n' to a  number it becomes a bigint
 // bigint is not used in production level usually
// JS is a dynamically typed language, changes are made on the go

// Reference/Non primitive- arrays, objects, Functions

//Arrays

const heros= ["spiderman","wonderwoman","batman"]
console.log(heros)
//Objects

let myObj = {
    name:"shamik",
    age:"23"
}

console.log(myObj)


//Functions
const myFunc= function(){
    console.log("hello")
}
console.log(myFunc)

// to know what datatype is returned for various datatypes, use the 'typeof' keyword 
// reference- https://www.w3schools.com/js/js_typeof.asp
