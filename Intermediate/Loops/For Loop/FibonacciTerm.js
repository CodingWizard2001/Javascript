// Write a for loop to print the Fibonacci series up to the nth term.



const prompt=require("prompt-sync")({sigint:true}); 
let num = parseInt(prompt("Enter a number : "));

let first = 0,second = 1;
console.log(first);
console.log(second);
for(let i = 0;i <= num;i++){
    let temp = first + second;
    first = second;
    second = temp;
    console.log(temp);
}