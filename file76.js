// short syntax 

// const  user1={
//   firstname:"harshit",
//   age:87,
//   about:function(){
//     console.log(this.firstname,this.age)
// }
// }


// you can write this like that also 



// creating about method 
// obect ke andar jo funtion hoota hai use method bolte hai isiliye "about method" bol raha hu 


const  user1={
  firstname:"harshit",
  age:87,
  about(){
    console.log(this.firstname,this.age)
}
}
user1.about()