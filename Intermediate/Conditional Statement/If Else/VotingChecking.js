// Write a program to read the age of a candidate and determine whether he is eligible to cast his/her own vote.


const prompt=require("prompt-sync")({sigint:true}); 
let age = parseInt(prompt("Enter your age : "));

if(age > 18) console.log("Eligible for vote");
else console.log("Not eligible for vote");