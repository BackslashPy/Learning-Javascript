// some method
const numbers=[3,5,11,81,9]

const ans=numbers.some((number)=>number%2===0)
console.log(ans)


const userCart=[
  {productId:1,productName:"mobile", price:12000},
  {productId:2,productName:"ipod", price:20000},
  {productId:3,productName:"laptop", price:18000},
  {productId:3,productName:"laptop", price:185000}
  ]
const anss=userCart.some((cartitem)=>cartitem.price>100000)
console.log(anss)

