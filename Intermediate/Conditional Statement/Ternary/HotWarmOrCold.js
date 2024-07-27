// Takes a temperature in Fahrenheit and returns "Hot" if the temperature is above 85, "Warm" if it's between 60 and 85, and "Cold" if it's below 60.



const prompt=require("prompt-sync")({sigint:true});
let temperature = parseInt(prompt("Enter temperature : "));


temperature > 85 ? console.log("Hot") : (temperature >= 60 ? console.log("Warm") : console.log("Cold"));