// nested if else 
let winningNumber=19;
// let userGuees= +prompt("guess the number"); (+) sign because prompt always take eveerything as String
console.log(userGuees)

if (userGuees===winningNumber){
  console.log("your guess is right")
}else{
  if(userGuees<winningNumber){
    console.log("too low!!!")

  }else{
    console.log("too high!!!")
  }
}