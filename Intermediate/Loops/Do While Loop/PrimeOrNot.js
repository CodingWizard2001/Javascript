// Write a do-while loop to check if a number is prime.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));
let flag = true;

let i = 2;
do{
    if(num % i == 0){
        flag = false;
        break;
    }
    i++;
}while((i * i) <= num);

if(flag) console.log(`${num} is a Prime number`);
else console.log(`${num} is not a Prime number`);