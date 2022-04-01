// map method  

const numbers=[3,4,5,6,8];

const square=function(number){
  return(number*number);
}
const sqnumber=numbers.map(square)
console.log(sqnumber)

const users=[
  {firstname:"harshit",gae4:23},
  {firstname:"naba",gae4:23},
  {firstname:"garima",gae4:23},
  {firstname:"harshita",gae4:23},
  {firstname:"shubrajit",gae4:23}
]
const userfirstname=function(user){
  return(user.firstname)

}
const username=users.map(userfirstname)
console.log(username)