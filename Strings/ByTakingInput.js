// Initialize string by taking input 

// prompt and window are not defined in the node environment so to run the run prompt we have to open terminal and write below code first

// <----- npm install prompt-sync ----->
// After then we have to write this at the top
// <----- const prompt = require("prompt-sync")({sigint : true}); ----->

const prompt = require("prompt-sync")({sigint : true}); 
let str = prompt("Enter : ");
console.log(str);