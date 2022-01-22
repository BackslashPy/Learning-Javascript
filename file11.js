// undefined
// const firstname
// let firstname -->undefined
// console.log(firstname)
// const--> you must assign a value to constatnt otherwise it will throw error 


// null
// let myvar=null
// console.log(myvar);
// console.log(typeof myvar);
// -->object (this is a bug in js)




// BigInt 
// let myvar=BigInt(154);
// console.log(myvar);
// let mynum=BigInt(454511545451547575);
// console.log(mynum);
// let addnum= mynum+myvar
// console.log(addnum)


let myvar=BigInt(154);
console.log(myvar);
let mynum=45;
console.log(mynum);
let addnum= mynum+myvar
console.log(addnum)
// -->Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions