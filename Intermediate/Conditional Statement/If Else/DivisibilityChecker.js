// Write a program that checks if a number is divisible by another number.


const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter a number : "));
let num2 = prompt("Enter a number : ");


if(num1 % num2 == 0) console.log("Divisible");
else console.log("Not divisible");