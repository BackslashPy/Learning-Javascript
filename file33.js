// for of loop in Array mostly used
const fruits=["apple","mango","grapes"];
const fruits2=[];


// for(let fruit of fruits){
//   console.log(fruit)
// }

for(let fruit of fruits){
  fruits2.push(fruit.toUpperCase())
}
console.log(fruits2)