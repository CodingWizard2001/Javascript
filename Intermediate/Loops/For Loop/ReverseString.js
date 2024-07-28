// Write a for loop to reverse a string.


const prompt=require("prompt-sync")({sigint:true}); 
let String = prompt("Enter String : ");

let reverse = "";
for(let i = String.length - 1;i >= 0;i--){
    reverse += String[i];
}
console.log(`Reverse will be : ${reverse}`);