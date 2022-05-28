// prototype 

// funtion me function ke alwa or ek empty object v rehta hai
// property ek empty object hai jisme sirf constructor nam ka key rehta hai

function hello(){
  console.log("hello world")
}
// you can add your own properties to a function
hello.shubra="shubrajit"
console.log(hello.shubra)
console.log(hello.name)//name property tells function name

console.log(hello.prototype)//{}

// proof that function me prototype exist karta hai

if (hello.prototype){
  console.log("prototype exist")
}else{
  console.log("prototype does not exist")
}
// hello function ka result--> prototype exist

const hello1={};
if (hello1.prototype){
  console.log("prototype exist")
}else{
  console.log("prototype does not exist")
}
// hello1 object ka result-->prototype does not exist

// prototype object me kuch property add karu
hello.prototype.abc="abc"
hello.prototype.xyz="xyz"
hello.prototype.sing=function(){
  return "lalallala"
}

console.log(hello.prototype.sing())
console.log(hello.prototype)