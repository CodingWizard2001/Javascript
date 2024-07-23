// Write a program in to read any Month Number in integer and display the number of days for this month.



const prompt=require("prompt-sync")({sigint:true}); 
let month = parseInt(prompt("Enter month : "));


if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) console.log("31 days");

else if(month == 2) console.log("28 days");

else console.log("30 days");