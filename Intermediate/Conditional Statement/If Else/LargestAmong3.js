// Write a program to find the largest of 3 numbers.


const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter a number : "));
let num2 = prompt("Enter a number : ");
let num3 = prompt("Enter a number : ");

if((num1 > num2) && (num1 > num3)) console.log(`${num1} is largest`);
else if((num2 > num1) && (num2 > num3)) console.log(`${num2} is largest`);
else console.log(`${num3} is largest`);