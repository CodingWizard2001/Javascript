// Takes a number as an argument and returns "Even" if the number is even and "Odd" if the number is odd.


const prompt=require("prompt-sync")({sigint:true});
let num = parseInt(prompt("Enter a number : "));

num % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");