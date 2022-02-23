// spread operator in array
const array1=[1,2,3];
const array2=[4,5,6];

// const newArray=[...array1,...array2]
// const newArray=[..."abc"]
const newArray=[..."456987123"]
// only string is iterable in js not integers
// thats why it throws error
// console.log(newArray)

// spread operator in object

const obj1={
  key1:"value1",
  key2:"value2",
}

const obj2={
  key1:"shubrajit",
  key3:"value3",
  key4:"value4",
}

// const newObject={...obj1, ...obj2};
// const newObject={ ...obj2,...obj1, key10:"backslashpy"};
const newObject={..."abcdefghijklmnopqrstuvwxyz"}
// const newObject={...["item1","item2"]}
// you can spread everything who is using index as their key by default

console.log(newObject)





