// Write a program that applies a discount based on the total purchase amount.


const prompt=require("prompt-sync")({sigint:true}); 
let purchase = parseInt(prompt("Enter purchase amount : "));
let discount = prompt("Enter discount offer : ");


if(purchase > 1000) console.log(purchase - ((purchase * discount) / 100));
else console.log(purchase);