// Write a JavaScript conditional statement to find the sign of the product of three numbers.


const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter first number : "));
let num2 = parseInt(prompt("Enter second number : "));
let num3 = parseInt(prompt("Enter third number : "));


if(num1 * num2 * num3 < 0) console.log(`Sign will be : '-'`);
else if(num1 * num2 * num3 == 0) console.log(`Sign will be : '0'`);
else console.log(`Sign will be : '+'`);