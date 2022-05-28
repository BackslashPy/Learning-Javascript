// store methods in differtent object 
// agar bar bar same method sab users use kare  to memory full ho jayega or bewakoofi hogi
// So....

const userMethods={
  about:function(){
    return `${this.firstname} is ${this.age} years old`
  },
  is18:function(){
    return this.age>=18;
  }
}

// memory ke ander ye object(userMethods) alag se store kar diya 

function createUser(firstname,lastname,age,email,address){
  const user={};
  user.firstname=firstname;
  user.lastname=lastname;
  user.age=age;
  user.email=email;
  user.address=address;
  user.about=userMethods.about; //yaha pe userMethod ka memory addrees likha hai, js iss address pe jake use call karega
  user.is18=userMethods.is18;
  
  return user
}
const user1=createUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user2=createUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user3=createUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
console.log(user3.address)
