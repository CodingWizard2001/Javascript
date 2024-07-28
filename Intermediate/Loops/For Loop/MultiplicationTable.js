// Write a for loop to generate the multiplication table of a given number.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));
for(let i = 1;i <= 10;i++){
    console.log(`${num} * ${i} = ${num * i}`);
}