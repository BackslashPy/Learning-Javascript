// sets(its iterable)
//stores data 
// set also have its own methods
//no index based access
// order is not guaranted(it can be{1,2,3}or{3,2,1})
// unique items only no duplicate allowed, otherwise it will ignore



const numbers=new Set([1,2,3,3]);
// console.log(numbers)
//it will ignore the other 3

// console.log(numbers[2])
 //result:undefined

const string=new Set("shubrajit");
// console.log(string)

// empty set

const emptyset=new Set()
// const items=["item1","item2","heda"]
// const items1=["item1","item2"]
emptyset.add(1)
emptyset.add(5)
emptyset.add(7)
emptyset.add(8)
emptyset.add(9)


// emptyset.add(items)
// emptyset.add(items)   //it will ignore this array



// emptyset.add(["item","item"])
// emptyset.add(["item","item"])
// this two is same array but because of the different memory allocation it wont ignore and take these two as different array 

// // but
// emptyset.add([items])
// emptyset.add([items])
// because items nam k array ko v hamne ek array ke andar dal diya


//number exist hai ya nahi
// if(numbers.has(9)){
//   console.log("1 is present")
  

// }else{
//   console.log ("1 is absent")
// }


// applying for of to set because it says its iterable
// for (let number of emptyset){
//   console.log(number)
// }


// console.log(emptyset)



// extract unique elements from an array using Set
const myarray=[1,2,3,4,5,6,6,9,9,8,7]
const uniqueElements=new Set(myarray);
console.log(uniqueElements)
console.log(myarray)

// find out length of our Set
let length=0;
for(let element of uniqueElements){
  length++

}
console.log(length)