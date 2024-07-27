// Takes a score (0-100) and returns "Pass" if the score is 50 or above, otherwise return "Fail".



const prompt=require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter your number : "));

number >= 50 ? console.log("Pass") : console.log("Fail");