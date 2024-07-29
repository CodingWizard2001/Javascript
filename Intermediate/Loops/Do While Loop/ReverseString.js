// Write a do-while loop to reverse a string.


const prompt=require("prompt-sync")({sigint:true}); 
let String = prompt("Enter String : ");

let reverse = "";
let i = String.length - 1;
do{
    reverse += String[i];
    i--;
}while(i >= 0);
console.log(`Reverse will be : ${reverse}`);