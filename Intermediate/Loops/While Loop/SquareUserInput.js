// Write a program to display the square of the number up to n integer.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = 1;
while(i <= num){
    console.log(`Square of ${i} Will be : ${i * i}`);
    i++;
}