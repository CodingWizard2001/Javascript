// Write a for loop to print the first multiples of 3.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

for (let i = 1; i <= num; i++) {
    if(i % 3 == 0) console.log(i);
}