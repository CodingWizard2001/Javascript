// Write a program that classifies a person’s age into "Child," "Teen," "Adult," or "Senior."

const prompt=require("prompt-sync")({sigint:true}); 
let age = parseInt(prompt("Enter your age : "));

if(age < 5) console.log("Child");
else if(age < 12) console.log("Teen");
else if(age < 65) console.log("Adult");
else console.log("Senior");