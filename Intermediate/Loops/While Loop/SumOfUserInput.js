// Write a while loop to calculate the sum of numbers from 1 to n.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let sum = 0;
let i = 1;
while(i <= num) {
    sum += i;
    i++;
}
console.log(`Sum of 1 to ${num} will be : ${sum}`);