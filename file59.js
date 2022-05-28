// reduce method

const numbers=[1,2,3,4,5,6,7];
const sum=numbers.reduce((accumulator,currentvalue)=>{
  return accumulator+currentvalue
},0);
// accumulator first value would be 0
console.log(sum)


const userCart=[
  {productId:1,productName:"mobile", price:12000},
  {productId:2,productName:"ipod", price:20000},
  {productId:3,productName:"laptop", price:18000}
]
const totalValue=userCart.reduce((totalprice,currentPRODUCT)=>{
  return currentPRODUCT.price+totalprice
},0);
console.log(totalValue)
