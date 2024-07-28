// Write a for loop to check if a number is prime.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));
let flag = true;
for(let i = 2;(i * i) <= num;i++){
    if(num % i == 0){
        flag = false;
        break;
    }
}
if(flag) console.log(`${num} is a Prime number`);
else console.log(`${num} is not a Prime number`);