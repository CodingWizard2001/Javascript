//  Write a program that takes an integer (1-5) representing a selection in a vending machine (1 for Chips, 2 for Soda, etc.) and uses a switch statement to print the item selected.



const prompt=require("prompt-sync")({sigint:true}); 
let button = parseInt(prompt("Enter pressed button number : "));


switch (button) {
    case 1:
        console.log(`Chips`);
        break;
    case 2:
        console.log(`Soda`);
        break;
    case 3:
        console.log(`Bag`);
        break;
    case 4:
        console.log(`Toys`);
        break;
    case 5:
        console.log(`Milk Shake`);
        break;
    default:
        console.log("Invalid button pressed");
        break;
}