const  user1={
    firstname:"harshit",
    age:87,
    about:function(){
      console.log(this.firstname,this.age)
  }
}
const myfunc=user1.about.bind(user1)
myfunc()

const  user2={
  firstname:"shubrajit",
  age:7

}
const  user20={
  firstname:"obama",
  age:71

}


const myfunc1=user1.about.bind(user20)
myfunc1()
