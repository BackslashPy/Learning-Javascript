// getters and setters

class Person{
  constructor(firstname,lastname,age){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;

  }
  get fullname(){
    return`${this.firstname} ${this.lastname}`
  }
  static classinfo(){
    return "this is static method"
  }
  static desc="static property";

  
  setfullname(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
      
  }
  set fullname(fullname){
    const [firstname,lastname]=fullname.split(" ")
    this.firstname=firstname;
    this.lastname=lastname;
  }
  // concept:array destructuring
}


const person1=new Person("harshit","sharma",54)
// console.log(person1.fullname())
console.log(person1.fullname)

// fullname is a method so ise call karne k liye () ye use karna hota hai but ise properties k tara use karne ke liye iske age ek "get" lahana hota hai bss

person1.setfullname("shubra","acharjee")
console.log(person1.firstname)
// otherwise (we have an effecient option)
person1.fullname="shubra acharjee";
console.log(person1)

//otherthan that we have static methods and propertise. to call this we dont need object
console.log(Person.classinfo())
console.log(Person.desc)

  
  
    // object k pass sirf (firstname,lastname,age) hai or Person k pass sab hai 
    
    
    
    
    // End of tutorial part 1
