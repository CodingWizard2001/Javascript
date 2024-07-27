// Takes a speed in km/h and returns "Speeding" if the speed is above 60, otherwise return "Within Limit".



const prompt=require("prompt-sync")({sigint:true});
let speed = parseInt(prompt("Enter speed : "));

speed > 60 ? console.log("Speeding") : console.log("Within Limit");