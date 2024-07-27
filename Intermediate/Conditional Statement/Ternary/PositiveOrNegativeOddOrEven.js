// Takes a number and returns "Positive Even" if the number is positive and even, "Positive Odd" if the number is positive and odd, "Negative Even" if the number is negative and even, and "Negative Odd" if the number is negative and odd.



const prompt=require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter your number : "));

number > 0 ? (number % 2 == 0 ? console.log("Positive Even") : console.log("Positive Odd")) : (number % 2 == 0 ? console.log("Negative Even") : console.log("Negative Odd"));