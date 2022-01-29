// array push pop  

// array shift unshift
let fruits=["apple","mango","grapes"];
// console.log(fruits)
//push
fruits.push("orange");
// // console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits)
let poppedfruit =fruits.pop();
console.log(fruits)
console.log("popped fruit is", poppedfruit)

// unshift--> add eleet to starting
fruits.unshift("heda")
console.log(fruits)

// shift-->reoe eleent from starting
let removedfruit=fruits.shift();
console.log(fruits);
console.log("reoved fruit is " ,removedfruit);

// push and pop method is faster than shift unshift