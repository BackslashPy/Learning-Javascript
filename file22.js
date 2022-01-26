// intro to for loop    
// for(var i=0; i<=9; i++){
//   console.log(i)
// }
// // if we use let-->Uncaught ReferenceError: i is not defined
//     at file22.js:6:30
//     (anonymous) @ file22.js:6
// If we use var --> there is no error when we  print the output on console out of the loop    
// console.log("value of i is ",i);

// we can use var like this
let i=0;
for (;i<=9; i++){
  console.log(i);

}
console.log("value of i is ", i)