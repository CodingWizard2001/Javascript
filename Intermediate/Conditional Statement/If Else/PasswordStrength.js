// Write a program that takes a password as input and evaluates its strength based on the following criteria:

// 1.   "Weak" if the password is less than 6 characters
// 2.   "Moderate" if the password is between 6 and 12 characters
// 3.   "Strong" if the password is more than 12 characters



const prompt=require("prompt-sync")({sigint:true}); 
let password = prompt("Enter month : ");

if(password.length < 6) console.log("Weak");
else if(password.length < 12) console.log("Moderate");
else console.log("Strong");