// for in loop in Array
const fruits=["apple","mango","grapes"];
const fruits2=[];

// mostly used loop

for(let index in fruits){
  fruits2.push(fruits[index].toUpperCase())
}
console.log(fruits2);


// mostly used loop
for (let i=0; i<fruits.length; i++){
  console.log(fruits[i])
}