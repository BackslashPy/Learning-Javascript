// callback function
function myfunc2(name){
  console.log("inside myfunc2")
  console.log(`your name is ${name}`)
  
}

// function myfunc(a){
//   a()

function myfunc(callback){
  console.log("hello there i am a function")
  callback("harshit");
// we accept myfunc2 as an input and call it(myfunc2). thiis is called callback fun
// when we accept fun as an parameter we called it callback as convention
}
myfunc(myfunc2)
