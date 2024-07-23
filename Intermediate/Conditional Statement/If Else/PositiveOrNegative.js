// Write a program that determines whether a given number is positive or negative.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

if(num >= 0) console.log("Positive number");
else console.log("Negative number");