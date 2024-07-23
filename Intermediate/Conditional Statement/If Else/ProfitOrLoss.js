// Write a program to calculate profit and loss on a transaction.


const prompt=require("prompt-sync")({sigint:true}); 
let sell = parseInt(prompt("Enter the price of selling : "));
let buy = prompt("Enter the price of buying : ");

if(sell > buy) console.log(`Profit: ${sell - buy}`);
else console.log(`Loss: ${buy - sell}`);