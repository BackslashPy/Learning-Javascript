// class keyword


class CreateUser{
  constructor(firstname,lastname,age,email,address){
console.log("called")
      this.firstname=firstname;
      this.lastname=lastname;
      this.age=age;
      this.email=email;
      this.address=address;
      this .address=address;
  }
  about(){
    return `${this.firstname} is ${this.age} years old`

  }
  is18(){
    return this.age>=18

  }
  sing(){
    return "lalalalalalalalalala"

  }

}

// const user10= new CreateUser("shubrajit","acharjee",18,"shubraji@gmnail.com","agartala")
const user20=new CreateUser("shu","acharjee",8,"shubi@gmnail.com","agartala")
const user30= new CreateUser("shubr","acharjee",20,"shubr@gmnail.com","agartala")
// console.log(user3.about())
console.log(user30.is18())  

console.log(Object.getPrototypeOf(user30))


// Practice
class Animal{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  eat(){
    return`${this.name} is eating`;
  }

  isSuperCute(){
    return this.age<=1;
  }
  isCute(){
    return true;
  }

}

const animal1=new Animal("tom",1);
const animal2=new Animal("jerry",10);
// console.log(animal1)
// console.log(animal1.isCute()) 
// console.log(animal1.isSuperCute()) 

// dog class
// class Dog{
//   constructor(name,age){
//     this.name=name;
//     this.age=age;
//   }
//   eat(){
//     return`${this.name} is eating`;
//   }

//   isSuperCute(){
//     return this.age<=1;
//   }
//   isCute(){
//     return true;
//   }

// }

// const tommy=new Dog("tommy",3)
// console.log(tommy.eat())




// actual way of doing
// class Dog extends Animal{
// 
// }
// const tommy=new Dog("tommy",3)
// console.log(tommy.eat())

// animal is parent/base/super class
// dog is subclass

// now i m not satisfied with name and age so i wanna add speed

class Dog extends Animal{
  constructor(name,age,speed){
  super(name,age);
  this.speed=speed;
  }
  run(){
    return`${this.name} is running at ${this.speed}kmph`
  }
  eat(){
    return`modified eat:${this.name} is eating`
  }
  // same method hoga toh pehele subclass me dekhega phir parent class me check karega

}
const tommy=new Dog("tommy",3,45)
console.log(tommy.run())
console.log(tommy.eat())
