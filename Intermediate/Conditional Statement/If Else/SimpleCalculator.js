// Write a program that performs basic arithmetic operations.



const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter first number : "));
let num2 = parseInt(prompt("Enter second number : "));
let char = prompt("Enter a number : ");


if(char == '+') console.log(`Addition : ${num1 + num2}`);
else if(char == '-') console.log(`Subtraction : ${num1 - num2}`);
else if(char == '*') console.log(`Multiplication : ${num1 * num2}`);
else console.log(`Division : ${num1 / num2}`);