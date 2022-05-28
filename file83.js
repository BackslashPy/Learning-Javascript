// new keyword
function createUser1(firstname,age){
  this.firstname=firstname,
  this.age=age
}

createUser1.prototype.about=function(){
  console.log(this.firstname,this.age)
}



const user1= new createUser1("harsht",45)
// console.log(user1)

// new keyword
// 1. empty object created by new and its value is this={}
// 2.empty object ko return karega


console.log(user1)