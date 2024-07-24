// Write a program that prints the price of a fruit based on its name.


const prompt=require("prompt-sync")({sigint:true}); 
let fruit = prompt("Enter fruit name : ");

if(fruit == "banana") console.log("Cost will be : $6");

else if(fruit == "apple") console.log("Cost will be : $8");

else if(fruit == "melon") console.log("Cost will be : $22");

else if(fruit == "peach") console.log("Cost will be : $10");

else if(fruit == "berry") console.log("Cost will be : $8");

else if(fruit == "lichi") console.log("Cost will be : $7");

else console.log("Doesn't match");