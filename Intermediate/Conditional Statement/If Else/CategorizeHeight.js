// Accept the height of a person in centimeter and categorize them


const prompt=require("prompt-sync")({sigint:true}); 
let height = parseInt(prompt("Enter your height : "));

if(height < 150) console.log("Dwarf");
if(height < 175) console.log("Average Height");
else console.log("Tall");