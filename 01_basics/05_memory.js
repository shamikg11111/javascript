// stack memory stores all the primitive data types 
// heap memory stores all the non primtive data types (reference data types)


//stack memory

let my_name= "shamik"
let nickname= my_name
console.log(my_name)
console.log(nickname)
nickname= "romit"
console.log(nickname)


// heap memory
let myobj ={
    name:"shamik ganguli",
    married: false
}

let myobj2 = myobj

console.log(myobj2.name)

// use the dot operator to change marriage status 
myobj2.married= true // ** as a result both the married status of objects(myobj and myobj2) get changed to true

console.log(myobj.married)
console.log(myobj2.married)
