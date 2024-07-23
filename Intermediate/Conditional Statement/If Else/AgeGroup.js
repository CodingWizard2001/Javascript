// Write a program that takes a person's age as input and classifies them into different age groups:

// 1.   "Child" if age is less than 13
// 2.   "Teen" if age is between 13 and 19
// 3.   "Adult" if age is between 20 and 64
// 4.   "Senior" if age is 65 or older


const prompt=require("prompt-sync")({sigint:true}); 
let age = parseInt(prompt("Enter your age : "));

if(age < 13) console.log("Child");
else if(age < 19) console.log("Teen");
else if(age < 64) console.log("Adult");
else console.log("Senior");