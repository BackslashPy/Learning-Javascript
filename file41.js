// Object destructuring
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     middleName: '',
//     currentAge: 28
// };

// let { firstName,  lastName, middleName = '', currentAge: age = 18 } = person;

// console.log(middleName);
// console.log(age);



// function getPerson() {
//   return null;
// }
// let { firstName, lastName } = getPerson()|| {};

// console.log(firstName, lastName);


const band={
  bandname:"led zeppline",
  famousSong:"straight to heaven",
  year:1968,
  anotherfamousSong:"hawaiye"
};

let{ bandname:var1,famousSong:var2,...restpro}=band;
console.log(var2)

console.log(restpro)
// restpro means rest properties , i gave that variable name to call rest variables

