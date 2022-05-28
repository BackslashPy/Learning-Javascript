// use prototype


// const userMethods={
//   about:function(){
//     return `${this.firstname} is ${this.age} years old`
//   },
//   is18:function(){
//     return this.age>=18;
//   },
//   sing:function(){
//     return "lalalalalalalalalala"

//   }
// }


// prototype jo free space de raha hai as an object usme hum userMethods ko dalke use karnge.
// createUser me khali space hai use use karnge



function createUser(firstname,lastname,age,email,address){
  const user=Object.create(createUser.prototype); // yaha pe  pehele __proto__ka value set kiya tha userMethod or ab yaha pe __proto__  ka value set kiya hai createuser ka prototype   
  user.firstname=firstname;
  user.lastname=lastname;
  user.age=age;
  user.email=email;
  user.address=address;
  user.address=address;
  // user.about=userMethods.about; 
  // user.is18=userMethods.is18;

   
  return user
}
// console.log(createUser.prototype)
createUser.prototype.about=function(){
      return `${this.firstname} is ${this.age} years old`
    } 
createUser.prototype.is18=function(){
      return this.age>=18
    }
createUser.prototype.sing=function(){
      return "lalalalalalalalalala"
  
    }
// console.log(createUser.__proto__)
console.log(createUser.prototype)

const user1=createUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user2=createUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user3=createUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
// console.log(user3.about())
// console.log(user3)
// console.log(user3.is18())

