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

// user1.about()


// copied code from file82.js

function CreateUser(firstname,lastname,age,email,address){
  // const user=Object.create(createUser.prototype); // new keyword ki  waja se iss line ki koi jarurat nahi hogi 
  // iss function ko hum constructer function bolte hai because ye hamare liye construct kar raha hai object
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.email=email;
  this.address=address;
  this .address=address;
  // user.about=userMethods.about; 
  // user.is18=userMethods.is18;

   
  // return this (new keyword khud se return karta hai isiliye retun likhne ki zarurat nahi)
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
console.log(createUser.prototype)

const user10= new CreateUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user20=new CreateUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user30= new CreateUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
// console.log(user3.about())
console.log(user30)
// console.log(user3.is18())


// __proto__ or [[prototype]] is same thing 

// convention
// kisi fucntion ko new lagake call karna hai ye developer ko pata lagega agar usko hum capital se shuru kare 