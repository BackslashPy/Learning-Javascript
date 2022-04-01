// default parameters

// old method if parameter"b" is not defined we can set a default parameter using our hand
//  function addtwo(a,b){
//    if(typeof b==="undefined"){
//      b=0;
//    }
//    return a+b;
//  }
//  const ans=addtwo(4000);
//  console.log(ans)


function addtwo(a,b=0){
     if(typeof b==="undefined"){
       b=0;
     }
     return a+b;
   }
   const ans=addtwo(4000);
   console.log(ans)