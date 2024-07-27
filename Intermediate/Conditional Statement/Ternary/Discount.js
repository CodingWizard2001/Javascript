// Takes a price and a boolean value indicating if a discount should be applied. Return the price with a 10% discount if true, otherwise return the original price.



const prompt=require("prompt-sync")({sigint:true});
let Price = parseInt(prompt("Enter a Price : "));

Price <= 1000 ? console.log(`Cost will be : ${Price}`) : console.log(`Cost will be : ${Price - ((Price * 10) / 100)}`);