// Write a program in to accept a grade and declare the equivalent description :

//    Grade	        Description
//      E	         Excellent
//      V	         Very Good
//      G	            Good
//      A	           Average
//      F	            Fail


const prompt=require("prompt-sync")({sigint:true}); 
let grade = prompt("Enter grade : ");


if(grade == 'E') console.log("Excellent");
else if(grade == 'E') console.log("Very Good");
else if(grade == 'E') console.log("Good");
else if(grade == 'E') console.log("Average");
else console.log("Fail");