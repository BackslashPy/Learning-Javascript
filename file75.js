// arrow function and this


const  user1={
  firstname:"harshit",
  age:87,
  about:()=>{
    console.log(this)
    console.log(this.firstname,this.age)
}
}
const myfunc=user1.about.bind(user1)
myfunc()
//undefined undefined... because arrow function ka koi apna this nahi hota wo this apna surrounding se leta ... arrow fun window ko apna this leta hai and you cant change it