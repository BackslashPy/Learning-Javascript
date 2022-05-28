// call,apply,bind method 
// function hello(){
//   console.log("hi world")

// }
// hello.call();

// const  user1={
//   firstname:"harshit",
//   age:87,
//   about:function(hobby,favmusician){
//     console.log(this.firstname,this.age,hobby,favmusician)
//   }
// }

// const  user2={
//   firstname:"mohit",
//   age:81,
// }
// user1.about.call(user2)
// user1.about.call(user2,"guiter","arijit singh")
// call user1 for its about but for "this" places use user2's values

// method 2

function about(hobby,favmusician){
  console.log(this.firstname,this.age,hobby,favmusician)
}

const  user1={
  firstname:"harshit",
  age:87,
  
}


const  user2={
  firstname:"mohit",
  age:81,
}

// about.call(user1,"guiter","arijit singh")



// apply
// bass alag alag print na karke ek hi array me la sakte ho using apply
// about.apply(user1,["guiter","papon"])



// Bind method 
// bind will return a function
const func=about.bind(user1,"guiter","arijit singh")
func()
// confused search google again






