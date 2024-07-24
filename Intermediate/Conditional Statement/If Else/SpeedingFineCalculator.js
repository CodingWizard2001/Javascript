// Write a program that calculates the fine for speeding based on the speed limit and the speed of the vehicle.


const prompt=require("prompt-sync")({sigint:true}); 
let speed = parseInt(prompt("Enter speed : "));

if(speed >= 80) console.log("Fine applied");
else console.log("No fine applied");