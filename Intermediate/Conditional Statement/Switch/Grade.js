// Write a program that takes a character representing a grade ('A', 'B', 'C', 'D', 'F') and uses a switch statement to print a message corresponding to the grade (e.g., "Excellent" for 'A', "Good" for 'B', etc.).



const prompt=require("prompt-sync")({sigint:true}); 
let grade = prompt("Enter grade : ");


switch (grade) {
    case "A":
        console.log(`Excellent`);
        break;
    case 'B':
        console.log(`Good`);
        break;
    case 'C':
        console.log(`Average`);
        break;
    case 'D':
        console.log(`Poor`);
        break;
    case 'F':
        console.log(`Fail`);
        break;
}