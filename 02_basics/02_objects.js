//objects can be declared inn 2 ways 
// 1 literal does not create a singleton object 
// 2 constructor creates a singleton object - only one object
//literals
const jsUser ={
    name:"shamik",
    age:23,
    loc:"kolkata",
    email:"shamikg11@gmail.com"
}
jsUser.email="shamik@gmail.com"
console.log(jsUser.email)
console.log(jsUser.name)

// freeze an object so that no one can change the details of the object
//Object.freeze(jsUser)
jsUser.email="ruma@gmail.com"
console.log(jsUser)
// no change in the email is seen 


// functions in objects 
jsUser.greetings=function(){
    console.log(`hello,${this.name}`)
}
// comment out the freeze command 
console.log(jsUser.greetings())
