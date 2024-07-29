// Write a do-while loop to calculate the sum of numbers from 1 to n.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let sum = 0;
let i = 1;
do{
    sum += i;
    i++;
}while(i <= num);
console.log(`Sum of 1 to ${num} will be : ${sum}`);