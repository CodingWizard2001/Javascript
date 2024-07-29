// Write a while loop to print the first multiples of 3.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = 1;
while(i <= num) {
    if(i % 3 == 0) console.log(i);
    i++;
}