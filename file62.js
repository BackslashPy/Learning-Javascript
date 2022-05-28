// every method

const numbers=[2,4,6,8,17]
const ans=numbers.every((number)=>number%2===0);
console.log(ans)


const userCart=[
  {productId:1,productName:"mobile", price:12000},
  {productId:2,productName:"ipod", price:20000},
  {productId:3,productName:"laptop", price:18000}
  ]

  const anss=userCart.every((cartitem)=>cartitem.price<30000);
console.log(anss)