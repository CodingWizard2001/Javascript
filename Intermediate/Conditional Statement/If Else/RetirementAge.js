// Write a program that checks if a person is eligible for retirement based on age.


const prompt=require("prompt-sync")({sigint:true}); 
let age = parseInt(prompt("Enter your age : "));

if(age >= 60) console.log("Eligible for retirement");
else console.log("Not eligible for retirement");