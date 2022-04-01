// important array methods
// foreach
// filter
// reduce
// Map 
const numbers=[4,5,6,7,8];
function myfunc(number,index){
  console.log(`index is ${index} number is ${number}`)
}
// for (let i=0; i<numbers.length;i++){
//   myfunc(numbers[i],i)
// }

// new method to print numbers with index

numbers.forEach(myfunc)


const users=[
  {firstname:"harshit",gae4:23},
  {firstname:"naba",gae4:23},
  {firstname:"garima",gae4:23},
  {firstname:"harshita",gae4:23},
  {firstname:"shubrajit",gae4:23},
]
// users.forEach(function(user){
//   console.log(user.firstname)
// })

// for (let user of users){
//   console.log(user.firstname)
// }