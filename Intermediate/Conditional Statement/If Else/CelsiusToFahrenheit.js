// Write a program that converts Celsius to Fahrenheit.


const prompt=require("prompt-sync")({sigint:true}); 
let Celsius = parseInt(prompt("Enter temperature : "));

let Fahrenheit = (Celsius * 9) / 5 + 32;
console.log(`In Fahrenheit : ${Math.floor(Fahrenheit)}`);