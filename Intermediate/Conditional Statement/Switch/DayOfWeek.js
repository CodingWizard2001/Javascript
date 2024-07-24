// Write a program that takes an integer (1-7) representing the day of the week (1 for Monday, 2 for Tuesday, etc.) and uses a switch statement to print the name of the day.


const prompt=require("prompt-sync")({sigint:true}); 
let day = parseInt(prompt("Enter day number : "));

day %= 7;
switch (day) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`Wednesday`);
        break;
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`Friday`);
        break;
    case 6:
        console.log(`Saturday`);
        break;
    case 7:
        console.log(`Sunday`);
        break;
}