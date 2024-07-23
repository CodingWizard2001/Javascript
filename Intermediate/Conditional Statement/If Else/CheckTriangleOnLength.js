// Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.


const prompt=require("prompt-sync")({sigint:true}); 
let length1 = parseInt(prompt("Enter a length : "));
let length2 = prompt("Enter a length : ");
let length3 = prompt("Enter a length : ");

if((length1 == length2) && (length2 == length3)) console.log("Equilateral Triangle");

else if((length1 != length2) && (length2 != length3) && (length1 != length3)) console.log("Scalene Triangle");

else console.log("Isosceles Triangle");