// Write a for loop to check if a number is prime.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));
let flag = true;

let i = 2;
while((i * i) <= num){
    if(num % i == 0){
        flag = false;
        break;
    }
    i++;
}
if(flag) console.log(`${num} is a Prime number`);
else console.log(`${num} is not a Prime number`);