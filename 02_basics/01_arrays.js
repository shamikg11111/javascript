const arr =[0,1,2,true]
console.log(arr[3])


//array methods
//1 push- appends an element to the arrays(to the end)
arr.push(6)
console.log(arr)
//2 pop - pops the last element of the array
arr.pop()
console.log(arr)

// 3 unshift - inserts an element to the start of the array which in turn shifts all the elements to the right 
arr.unshift(9)
console.log(arr)

// 4 shift - removes the first element of the array , which in turn pushes the rest of the elements to the left 
arr.shift()
console.log(arr)

// 5 includes - returns boolean , checks whether the array contains the leement or not 
console.log(arr.includes(9)) 


// 6 indexOf - returns the index of the element of the array 
console.log(arr.indexOf(true))

// 7 join - converts an array to a string 
// for eg we create an array new arr 
const newarr=arr.join()
console.log(arr)
console.log(newarr)

// 8** slice and splice
console.log("A", arr)
const mynewar= arr.splice(1,3)
console.log(arr)
console.log(mynewar)
// so basically what splice does is that it takes elemts between a range ( the end limit is not inclusive ) and prints them 
// it also modifies the original array , here 0 is removed from the original array 
const mynewar1= arr.slice(1,3)
console.log("B",arr)
console.log(mynewar1)

// read about slice and splice 
