// create funtion  to create multiple objects 

// aim
// function (that function create object)
// add key value pair 
// return the object

function createUser(firstname,lastname,age,email,address){
  const user={};
  user.firstname=firstname;
  user.lastname=lastname;
  user.age=age;
  user.email=email;
  user.address=address;
  user.about=function(){
    return `${this.firstname} is ${this.age} years old`
  }
  user.is18=function(){
    return this.age>=18;
  }
  return user
}
const user1=createUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user2=createUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user3=createUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
console.log(user3.about())
