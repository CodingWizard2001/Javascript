// Calculate Factorial for n number



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let factorial = 1;
for(let i = 1;i <= num;i++){
    factorial *= i;
}
console.log(`Factorial of ${num} will be : ${factorial}`);