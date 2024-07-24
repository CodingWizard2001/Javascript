// Write a program that simulates a traffic light and prints the action (stop, ready, go).

const prompt=require("prompt-sync")({sigint:true}); 
let lightColor = prompt("Enter light color : ");

if(lightColor == "red") console.log("Stop");
else if(lightColor == "yellow") console.log("Ready");
else console.log("Go");