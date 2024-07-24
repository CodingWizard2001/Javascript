// Write a program that takes a number as input and determines if it is positive, negative, or zero.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

if(num >= 0) console.log("Positive number");
else if(num == 0) console.log("Zero");
else console.log("Negative number");