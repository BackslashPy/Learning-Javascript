// solution using Object.create



const userMethods={
  about:function(){
    return `${this.firstname} is ${this.age} years old`
  },
  is18:function(){
    return this.age>=18;
  },
  sing:function(){
    return "lalalalalalalalalala"

  }
}



function createUser(firstname,lastname,age,email,address){
  const user=Object.create(userMethods); // usermethods sare proto me set ho gaya
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
const user1=createUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user2=createUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user3=createUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
console.log(user3.about())
console.log(user3)

