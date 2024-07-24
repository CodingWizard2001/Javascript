// Write a program that calculates the increment in salary based on performance.


const prompt=require("prompt-sync")({sigint:true}); 
let performance = parseInt(prompt("Enter performance : "));

if(performance >= 3) console.log("Salary increased");
else console.log("No salary increased");