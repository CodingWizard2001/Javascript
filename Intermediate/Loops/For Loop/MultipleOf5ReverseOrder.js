// Write a for loop to print the first multiples of 5 in reverse order.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

for (let i = num; i >= 1; i--) {
    if(i % 5 == 0) console.log(i);
}