// Write a program to check whether a triangle can be formed with the given values for the angles.



const prompt=require("prompt-sync")({sigint:true}); 
let angle1 = parseInt(prompt("Enter a angle : "));
let angle2 = prompt("Enter a angle : ");
let angle3 = prompt("Enter a angle : ");


if(angle1 + angle2 + angle3 == 180) console.log("Tri-angle can be formed");

else console.log("Tri-angle can't be formed");