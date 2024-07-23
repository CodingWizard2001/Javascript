// Determine the grade based on a score



const prompt=require("prompt-sync")({sigint:true}); 
let noOfSubject = parseInt(prompt("Enter the no. of subject : "));

let totalMarks = 0,temp = noOfSubject;

while(temp--){
    let subjectName = prompt("Enter the name of the subject : ");
    let noGet = parseInt(prompt("Enter the number : "));

    totalMarks += noGet;
}

let percentage = (totalMarks / noOfSubject)

if(percentage > 95) console.log("Grade : O");
else if(percentage > 85) console.log("Grade : E");
else if(percentage > 75) console.log("Grade : A+");
else if(percentage > 65) console.log("Grade : A");
else if(percentage > 55) console.log("Grade : B");
else if(percentage > 45) console.log("Grade : C");
else if(percentage > 35) console.log("Grade : D");
else console.log("Grade: Fail");