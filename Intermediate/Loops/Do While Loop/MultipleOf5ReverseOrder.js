// Write a do-while loop to print the first multiples of 5 in reverse order.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let i = num;
do{
    if(i % 5 == 0) console.log(i);
    i--;
}while( i >= 1);