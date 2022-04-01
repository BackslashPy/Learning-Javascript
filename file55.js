// function returning function
function myfunc(){
  function hello(){
    return "hello world"
  }
  return hello;

}

// another syntax
// function myfunc(){
//   return function hello(){
//     return "heoll"
//   }
// }


const ans=myfunc()
console.log(ans())
