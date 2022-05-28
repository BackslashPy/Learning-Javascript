// clone using oject.assign

const obj={
  name:"harshit",
  age:8

}

// const obj2=obj
// obj.key3="student"

// but we want key3 only for obj
const obj2=Object.assign({},obj)
obj.key3="student"

// we can use spread operator also 
// const obj2={...obj}
// obj.key3="student"


console.log(obj)
console.log(obj2)