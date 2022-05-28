// __proto__ , Object.create
const obj1={
  key1:"value1",
  key2:"value2"
}

// const obj2={}
// obj2.key3="value3"
// console.log(obj2.key1) //undefined


// there is one more way to create empty Object
const obj2=Object.create(obj1)
// obj2.key2="value2obj2"
console.log(obj2) 
console.log(obj2.key2)

console.log(obj2.__proto__) 
// --proto-- or [[Prototype]] both are same thing(you call it dunder also)
// but prototype is different thing
// when js ko key2 obj2 me nahi mila tab wo obj1 se wo value liya jo ki object.create ke waja se obj2 ke sath obj1 ka relationship bana...or wo hum dekh sakte hai console me jakr __proto__ me click kaarke.
// object.create is setting all the  __proto__