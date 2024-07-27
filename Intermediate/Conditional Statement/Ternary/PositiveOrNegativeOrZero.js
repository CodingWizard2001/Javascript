// Checks if a number is positive, negative, or zero and returns "Positive", "Negative", or "Zero".



const prompt=require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter your number : "));

number > 0 ? console.log("Positive") : (number == 0 ?console.log("Zero") : console.log("Negative"));