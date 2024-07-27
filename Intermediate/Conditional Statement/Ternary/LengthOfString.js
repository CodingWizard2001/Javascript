// Takes a string and returns "Long" if the string length is greater than 10, otherwise return "Short".


const prompt=require("prompt-sync")({sigint:true});
let str = prompt("Enter String : ");

str.length >= 10 ? console.log("Long") : console.log("Short");