// Take a number and reverse it



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let reverse = 0;
for(let i = num;i > 0;i = Math.floor(i / 10)){
    let digit = (i % 10);
    reverse = (reverse * 10) + digit;
}
console.log(`In reverse : ${reverse}`);