// diff betn dot and bracket notation

const key="email";
const person={
  name:"shubrajit",
  age:23,
  "person hobbies":["coding","sleeping","listening musics"]



};
// console.log(person["person hobbies"])
// you cant print person hobbies using dot notation


person[key]="shubrajit@gmail.com"
console.log(person)

