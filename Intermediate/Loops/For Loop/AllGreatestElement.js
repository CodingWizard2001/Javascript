// Write a for loop to print all elements in an array that are greater than a given value.



const prompt=require("prompt-sync")({sigint:true}); 
let target = parseInt(prompt("Enter target : "));
let myArray = [5,8,2,7,3,11,4,9];
for(let i = 0;i < myArray.length;i++){
    if(target < myArray[i]) console.log(myArray[i]);
}