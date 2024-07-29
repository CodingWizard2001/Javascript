// Write a do-while loop to print all elements in an array that are greater than a given value.



const prompt=require("prompt-sync")({sigint:true}); 
let target = parseInt(prompt("Enter target : "));

let myArray = [5,8,2,7,3,11,4,9];
let i = 0;
do{
    if(myArray[i] > target) console.log(myArray[i]);
    i++;
}while(i < myArray.length);