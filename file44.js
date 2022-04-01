// // function declaration

// function singHappyBday(){
//   console.log("happy birthyday shubrajit");

// }
// singHappyBday();




// SUM OF NUMBERS
// function sumtwonumbers(num1,num2,num3){
//   return num1+num2+num3;

// }
// const returnsum=sumtwonumbers(45,50,0);
// console.log(returnsum)



// odd/even test 
// function isEven(num){
//   if(num%2===0){
//   return true;
//   }
//   return false;
// }
// console.log(isEven(45 ))

// keeping it shorter
// function isEven(num){
//   return num%2===0;
// }
// console.log(isEven(55))

// // string as an input

// function firstchar(anystr){
//   return anystr[0];
// }
// console.log(firstchar("shubra"))


// finding target

function findtarget(array,target){
  for(let i=0;i<array.length; i++){
    if(array[i]===target){
      return i
    }
  }
  return -1
}
const myarray=[1,3,5,4,8,110]
console.log(findtarget(myarray,110))
