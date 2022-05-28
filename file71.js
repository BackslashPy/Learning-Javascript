// method
// function inside an object is called method 

function personsInfo(){
  console.log(`this is ${this.firstname} and my age is ${this.age}`)
}

// this is keyword used because it refers to the person or the object where the function exist


const person1={
  firstname:"harshit",
  age:23,
  about:personsInfo
}
const person2={
  firstname:"shubrajit",
  age:23,
  about:personsInfo
}
const person3={
  firstname:"harsh",
  age:23,
  about:personsInfo
}
person1.about();
person2.about();
person3.about();
