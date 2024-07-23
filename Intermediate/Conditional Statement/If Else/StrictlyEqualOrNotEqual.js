// Write a JS program to accept two integers and check whether they are equal or not.


const prompt=require("prompt-sync")({sigint:true}); 
let num1 = parseInt(prompt("Enter a number : "));
let num2 = prompt("Enter a number : ");

if(num1 === num2) console.log("Equal");
else console.log("Not equal");