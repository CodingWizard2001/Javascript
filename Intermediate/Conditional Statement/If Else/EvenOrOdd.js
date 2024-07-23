// Write a program to check whether a given number is even or odd.


const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

if(num % 2 == 0) console.log("Even number");
else console.log("Odd number");