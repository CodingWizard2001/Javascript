// Take a number and reverse it



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let reverse = 0;
let i = num;
while(i > 0){
    let digit = (i % 10);
    reverse = (reverse * 10) + digit;
    i = Math.floor(i / 10)
}
console.log(`In reverse : ${reverse}`);