// Takes a temperature in Celsius and returns "Freezing" if the temperature is below 0, otherwise return "Not Freezing".



const prompt=require("prompt-sync")({sigint:true});
let temperature = parseInt(prompt("Enter temperature : "));

temperature < 0 ? console.log("Freezing") : console.log("Not Freezing");