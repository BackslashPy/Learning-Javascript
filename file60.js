// sort method
// ASCII table-->file:///C:/Users/Shubrajit%20Acharjee/Desktop/ASCII-Table.svg


const numbers=[4,5,8,7,87,1200,0,9]
// numbers.sort((a,b)=>{
//   return a-b;
// });
numbers.sort((a,b)=>{
  return b-a;
});
console.log(numbers)

const username=["harsit","shubrajit","casey","baecky","AAAA"]
username.sort()
console.log(username)

const products=[
  {productId:1,productName:"p1",price:500},
  {productId:2,productName:"p2",price:900},
  {productId:3,productName:"p3",price:400},
  {productId:4,productName:"p4",price:200},
  {productId:5,productName:"p5",price:3000},
]
// lowtohigh
const LowToHigh=products.slice(0).sort((a,b)=>{
  return a.price-b.price
})
console.log(LowToHigh)

// HighToLow
const HighToLow=products.slice(0).sort((a,b)=>{
  return b.price-a.price
})
console.log(HighToLow) 