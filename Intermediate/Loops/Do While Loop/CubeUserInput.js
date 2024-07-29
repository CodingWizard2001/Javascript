// Write a program to display the cube of the number up to n integer.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = 1;
do{
    console.log(`Cube of ${i} Will be : ${i * i * i}`);
    i++;
}while(i <= num);