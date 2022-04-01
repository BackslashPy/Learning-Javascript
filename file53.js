// parameter destructuring
const person1={
  firstname:"harshit",
  gender:"male",
  age:25
}

// function printdetails(obj){
//   console.log(obj.firstname);
//   console.log(obj.age);
  
// }
// as i already know we use person object in the place of "obj" in that function thats why we already using our objects parameters directly in the firstplace. This is called param destructuring
function printdetails({firstname,age}){
  console.log(firstname);
  console.log(age);
  
}
printdetails(person1)

