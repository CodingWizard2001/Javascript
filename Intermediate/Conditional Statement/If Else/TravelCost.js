// Write a program that estimates the cost of travel based on distance and mode of transport.


const prompt=require("prompt-sync")({sigint:true}); 
let transport = prompt("Enter transport : ");

if(transport == "airplane") console.log(`Cost will be high`);
if(transport == "train") console.log(`Cost will be more`);
if(transport == "bus") console.log(`Cost will be less`);