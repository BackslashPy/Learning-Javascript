// Map Data structure
//  map is an iterable 

// store data in order fashion
// duplicate keys are not allowd like objects
// objects can only have string or symbol as key
// in Map you can use anything as key like array,number, string

// Brief discussion about keys are string or not  in object
// const person={
//   firstname:"harshit",
//   age:7,
//   1:"one"
// }

// // key-->string 
// // key-->Symbol 
// // figuring out keys are string or not 
// for (let key in person){
//   console.log(typeof key)

// }
// // or
// console.log(person["1"])




// Map v key value pair store karke apne andar

// const person=new Map();
// person.set("firstname","harshit");
// person.set(true,"one");
// person.set("age",7);
// person.set([1,2,3],7); //type-->object(because array object hota hai so...)
// console.log(person)
// console.log(person.firstname) //undefined

// console.log(person.get("age"))
// console.log(person.get(true))
// console.log(person.keys())
// for (let key of person.keys()){
//   console.log(typeof key)
// }

// Map me koi v datatype ka keys ho sakta hai 
// we can also  use arrays as key

// object me only for in loop laga sakte tha but ispe hum for of loop direct laga sakte hai

// using for of loop
// for (let [key, value] of person){
//   console.log(key, value)

// }


// array inside an array
// const person=new Map ([["firstname","shubrajit"],["age",7]])
// console.log(person)


// additonal features adding using map into an object 
const person1={
  id:1,
  firstname:"harshit"
}
const person2={
  id:2,
  firstname:"shuubrajit"
}

const userinfo=new Map();
userinfo.set(person1,{age:7,gender:"male"})

 
const userinfo2=new Map();
userinfo2.set(person2,{age:70,gender:"female"})

// person1-->Key 
// {rest code}-->value

// console.log(userinfo)

console.log(person1.id);
console.log(userinfo.get(person1).gender);
console.log(person2.id);
console.log(userinfo2.get(person2).gender);
