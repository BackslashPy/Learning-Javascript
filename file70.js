// optional chaining

const user={
  firstname:"harshit",
  // address: {housnumber:1244}
}

console.log(user.firstname);
// console.log(user.address.housnumber); //Uncaught TypeError: Cannot read properties of undefined (reading 'housnumber') at file70.js:9:26 (anonymous) @ file70.js:9 index.js:1 Hello page! I'm AskWallet extens

console.log(user?.address?.housnumber); //undefined
// it will check every thing before proceed otherwise return null or undefined

