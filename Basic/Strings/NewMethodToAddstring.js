// Old method to add 2 string together

const prompt = require("prompt-sync")({sigint : true}); 
let str1 = prompt("Enter first message : ");
let str2 = prompt("Enter second message : ");
console.log(`${str1} ${str2}`);