// Write a program that checks if a number is prime.


const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let bool = true;
for(let i = 2;i * i <= num;i++){
    if(num % i == 0){
        bool = false;
        break;
    }
}

if(bool) console.log("Prime number");
else console.log("Not a prime number");