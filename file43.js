// nested destructuring// object inside Array
const users=[
  {userid:1, firstname:"harshit", gender:"male"},
  {userid:2, firstname:"rohit", gender:"male"},
  {userid:3, firstname:"nitish", gender:"male"}

]

const[{firstname:user1firstname, userid},user2,{gender}]=users;
console.log(user1firstname,userid,gender)
console.log(user2)
