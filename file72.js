// console.log(this)
// window object provided by js 
// this===window(same thing will return)



// function myfunc1(){
//   console.log("hi")
// }
// myfunc1()  
// window.myfunc1()
// myfunc1 is added to window Object



// function myfunc1(){
//   console.log(this)
// }
// myfunc1()

"use strict";
function myfunc1(){
  console.log(this)
}
myfunc1() //undefined 
