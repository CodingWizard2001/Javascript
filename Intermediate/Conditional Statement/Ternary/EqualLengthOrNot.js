// Takes two strings and returns the longer string. If they are of equal length, return "Equal".



const prompt=require("prompt-sync")({sigint:true});
let str1 = prompt("Enter String : ");
let str2 = prompt("Enter String : ");

str1.length > str2.length ? console.log(`${str1} is longest`) : (str1.length == str2.length ? console.log("Equal") : console.log(`${str2} is longest`));