// Write a for loop to calculate the product of numbers from 1 to n.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let product = 1;
for (let i = 1; i <= num; i++) {
    product *= i;
}
console.log(`Product of 1 to ${num} will be : ${product}`);