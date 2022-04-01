// filter method
const numbers=[1,2,3,4,5,6,7,8,9]



// const isodds=function(number){
//   return number%2!==0;
   
// }


// const evennum=numbers.filter(isodds);
// console.log(evennum)

const evennumbers=numbers.filter((number)=>{
  return number%2===0;
})
console.log(evennumbers)