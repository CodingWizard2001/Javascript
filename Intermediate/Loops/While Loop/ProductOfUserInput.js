// Write a for loop to calculate the product of numbers from 1 to n.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let product = 1;
let i = 1;
while(i <= num) {
    product *= i;
    i++
}
console.log(`Product of 1 to ${num} will be : ${product}`);