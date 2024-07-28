// Write a program to display the square of the number up to n integer.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

for(let i = 1;i <= num;i++){
    console.log(`Square of ${i} Will be : ${i * i}`);
}