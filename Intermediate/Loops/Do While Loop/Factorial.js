// Calculate Factorial for n number



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let factorial = 1;
let i = 1;
do{
    factorial *= i;
    i++;
}while(i <= num);

console.log(`Factorial of ${num} will be : ${factorial}`);