// Write a for loop to reverse a string.


const prompt=require("prompt-sync")({sigint:true}); 
let String = prompt("Enter String : ");

let reverse = "";
let i = String.length - 1;
while(i >= 0){
    reverse += String[i];
    i--;
}
console.log(`Reverse will be : ${reverse}`);