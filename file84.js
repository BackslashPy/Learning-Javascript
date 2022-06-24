// hasOwnProperty



// copied from  file83


function CreateUser(firstname,lastname,age,email,address){

  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.email=email;
  this.address=address;
  this .address=address;

}
// console.log(createUser.prototype)
CreateUser.prototype.about=function(){
      return `${this.firstname} is ${this.age} years old`
    } 
CreateUser.prototype.is18=function(){
      return this.age>=18
    }
CreateUser.prototype.sing=function(){
      return "lalalalalalalalalala"
    }
// console.log(createUser.__proto__)
// console.log(createUser.prototype)

const user10= new CreateUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user20=new CreateUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user30= new CreateUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
// console.log(user3.about())
// console.log(user30)

// for all keys in user10
// for( let key in  user10){
//   console.log(key)
// }

// when i onlywant objects own property not prototypes properties

for (let key in user10){
  if(user10.hasOwnProperty(key)){
    console.log(key)
  }

}