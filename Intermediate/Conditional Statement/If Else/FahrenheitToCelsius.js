// Write a program that converts Fahrenheit to Celsius.


const prompt=require("prompt-sync")({sigint:true}); 
let Fahrenheit = parseInt(prompt("Enter temperature : "));

let Celsius = (Fahrenheit - 32) * 5 / 9;
console.log(`In Fahrenheit : ${Math.floor(Celsius)}`);