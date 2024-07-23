// Write a program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.



const prompt=require("prompt-sync")({sigint:true}); 
let point1 = parseInt(prompt("Enter a point : "));
let point2 = prompt("Enter a point : ");

if(point1 > 0 && point2 > 0) console.log("First");
else if(point1 < 0 && point2 > 0) console.log("Second");
else if(point1 < 0 && point2 < 0) console.log("Third");
else if(point1 > 0 && point2 < 0) console.log("Fourth");
else console.log("On (0,0)");