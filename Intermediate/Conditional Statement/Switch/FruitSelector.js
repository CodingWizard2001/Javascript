// Write a program that takes an integer (1-5) representing a fruit selection (1 for Apple, 2 for Banana, etc.) and uses a switch statement to print the name of the fruit.



const prompt=require("prompt-sync")({sigint:true}); 
let fruit = parseInt(prompt("Enter fruit number : "));


switch (fruit) {
    case 1:
        console.log(`Apple`);
        break;
    case 2:
        console.log(`Banana`);
        break;
    case 3:
        console.log(`Melon`);
        break;
    case 4:
        console.log(`Peach`);
        break;
    case 5:
        console.log(`Lemon`);
        break;
    default:
        console.log("Invalid");
        break;
}