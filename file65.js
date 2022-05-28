// splice method
// start, delete, insert 

const myArray=["item1","item2","item3"];

// insert
// myArray.splice(1,0,'inseted item')
// console.log(myArray)
// started from 1st index and insert 1 item in 1st index  , delete 0 item 


// delete
const deletedItems=myArray.splice(0,2)
console.log("dleted items : ",deletedItems)
// find out deleted items
console.log(myArray)
// started from 0th index and remove 2 items


