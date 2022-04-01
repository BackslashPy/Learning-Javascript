// arrow function




// const singHappyBday=function(){
//   console.log("happy birthyday shubrajit");  
// }
// singHappyBday()
// converting to arrow function
const singHappyBday=()=>{
  console.log("happy birthyday shubrajit");  
}
// singHappyBday()

const sumtwonumbers=(num1,num2,num3)=>{
  console.log(num1+num2+num3);

}
// sumtwonumbers(4,5,6)

// function isEven(num){
//   return num%2===0;
// }

const isEven=num=>{
  return num%2===0;
}
// if your input is only one parameter like "num" then you can remove ()
// console.log(isEven(45))


// const firstchar= anystr=>{
//     return anystr[0];
//   }
  // console.log(firstchar("shubrajit "))
const firstchar=anystr=>anystr[0];
  console.log(firstchar("shubrajit "))
  