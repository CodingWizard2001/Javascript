// Write a program that determines if a given shape is a square or a rectangle based on its sides.



const prompt=require("prompt-sync")({sigint:true}); 
let length = parseInt(prompt("Enter the length : "));
let width = parseInt(prompt("Enter the width : "));

if(length == width) console.log("Square");
else console.log("Rectangle");