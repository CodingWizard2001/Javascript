// Takes two numbers and returns the greater of the two.



const prompt=require("prompt-sync")({sigint:true});
let num1 = parseInt(prompt("Enter first number : "));
let num2 = parseInt(prompt("Enter second number : "));

num1 > num2 ? console.log(`${num1} is greatest`) : console.log(`${num2} is greatest`);