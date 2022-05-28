// find method
const myarray=["naba","shubrajit","shubra","harshit"]

// function isLength3(string){
//   return string.length===4;
// }
const ans=myarray.find((string)=>string.length===4);
console.log(ans)

const user=[
  {userId:1,username:"harshit1"},
  {userId:2,username:"harshit2"},
  {userId:3,username:"harshit3"},
  {userId:4,username:"harshit4"},
  {userId:5,username:"harshit5"}
];

const anss=user.find((user)=>user.userId===3)
console.log(anss)