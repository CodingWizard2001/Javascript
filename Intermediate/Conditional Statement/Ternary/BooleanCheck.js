// Create a function that takes a boolean value and returns "Yes" if true, otherwise return "No".



const prompt=require("prompt-sync")({sigint:true});
let num = parseInt(prompt("Enter a number : "));

(num == 0 || num == 1) ? console.log("Boolean Number") : console.log("Not a Boolean Number");