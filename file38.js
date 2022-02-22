// how to iterate objects
const person={
  name:"shubrajit",
  age:23,
  "person hobbies":["coding","sleeping","listening musics"]



};

// for in loop


for (let key in person){
  // console.log(key)
  // console.log(`${key} : ${person[key]}`)
  // console.log(key,"::",person[key])

}


// checking the arrays
// console.log(typeof(Object.keys(person)))
// const val=Array.isArray(Object.keys(person))
// console.log(val)

 


// object.keys
for(let key of Object.keys(person)){
  console.log(key,person[key])
}

// console.log(Object.keys(person));




