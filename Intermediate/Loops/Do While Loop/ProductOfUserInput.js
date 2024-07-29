// Write a do-while loop to calculate the product of numbers from 1 to n.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let product = 1;
let i = 1;
do{
    product *= i;
    i++
}while(i <= num);
console.log(`Product of 1 to ${num} will be : ${product}`);