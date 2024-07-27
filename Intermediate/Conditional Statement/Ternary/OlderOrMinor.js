// Takes an age as an argument and returns "Adult" if the age is 18 or older, otherwise return "Minor".


const prompt=require("prompt-sync")({sigint:true});
let age = parseInt(prompt("Enter your age : "));

age >= 18 ? console.log("Adult") : console.log("Minor");