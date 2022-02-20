const myarray=["value1","value2","value3", "value4"]
// let myvar1=myarray[0];
// let myvar2=myarray[1];
// console.log("value of myvar1", myvar1 )
// console.log("value of myvar2", myvar2 )

// let [myvar1, , ,myvar2, ...myNewarray]=myarray;
let [myvar1,myvar2, ...myNewarray]=myarray;

console.log("value of myvar1", myvar1 )
console.log("value of myvar2", myvar2 )
console.log(myNewarray)




