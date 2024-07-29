// Write a for loop to generate the multiplication table of a given number.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = 1;
while(i <= 10){
    console.log(`${num} * ${i} = ${num * i}`);
    i++;
}