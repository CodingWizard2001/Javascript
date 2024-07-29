// Write a do-while loop to print the first multiples of 3.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = 1;
do{
    if(i % 3 == 0) console.log(i);
    i++;
}while(i <= num);