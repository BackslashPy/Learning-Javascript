// rest parameters
  function myfunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log("a is ${a}")
    console.log(`c is`,c);
  }

  myfunc(5,4,6,7,8,9,10)



  function addall(...numbers){
    let total=0;
    for(let number of numbers){
      total=total+number;
    }
    return total
  }
  console.log(addall(4,5,6,9,8,7,5))