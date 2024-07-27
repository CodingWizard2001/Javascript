// Takes a number and returns "Divisible by 3" if the number is divisible by 3, "Divisible by 5" if the number is divisible by 5, and "Divisible by both" if it's divisible by both 3 and 5.



const prompt=require("prompt-sync")({sigint:true});
let num = parseInt(prompt("Enter a number : "));

(num % 3 == 0) && (num % 5 == 0) ? console.log("Divisible by both") : ((num % 3 == 0) ? console.log("Divisible by 3") : ((num % 5 == 0) ? console.log("Divisible by 5") : console.log("Not divisible")));