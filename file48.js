// function inside function
const app=()=>{

  const myfunc=()=>{
    console.log("hello from myfunc")
  }
  const addtwo=(num1,num2)=>{
    return num1+num2;
  }
  const mul=(num1,num2)=> num1*num2;


  console.log("inside app")
    myfunc();
    console.log(addtwo(45,54));
    console.log(mul(4,5));

}
app()