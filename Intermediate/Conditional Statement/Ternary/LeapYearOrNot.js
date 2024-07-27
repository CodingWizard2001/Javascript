// Checks if a given year is a leap year. Return "Leap Year" or "Not a Leap Year".



const prompt=require("prompt-sync")({sigint:true});
let year = parseInt(prompt("Enter year : "));

year % 4 == 0 && (year % 400 == 0 || year % 100)? console.log("Leap-year") : console.log("Not a leap-year");