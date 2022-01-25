// switch statement

let day=1;

// old method
// if(day===0){
//   console.log("its sunday")
// }else if(day===1){
//   console.log("its monday");

// }else if(day===2){
//   console.log("its tuesday");

// }else if(day===3){
//   console.log("its wednesday");

// }else if(day===4){
//   console.log("its thursday");
// }else if(day===5){
//   console.log("its friday");
// }else if(day===6){
//   console.log("its saturday");
// }else{
//   console.log("invalid day");
// }

switch(day){
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;  
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("sorry!!!invalid input");
  
}