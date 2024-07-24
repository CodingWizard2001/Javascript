// Write a program that takes a character representing a traffic light color ('R' for Red, 'Y' for Yellow, 'G' for Green) and uses a switch statement to print the corresponding action (e.g., "Stop" for 'R', "Ready" for 'Y', "Go" for 'G').


const prompt=require("prompt-sync")({sigint:true}); 
let button = prompt("Enter pressed button number : ");


switch (button) {
    case 'R':
        console.log(`Stop`);
        break;
    case 'Y':
        console.log(`Ready`);
        break;
    case 'G':
        console.log(`Go`);
        break;
    default:
        console.log("Invalid");
        break;
}